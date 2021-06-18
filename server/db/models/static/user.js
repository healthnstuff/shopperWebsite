const Sequelize = require("sequelize");
const db = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios");

const SALT_ROUNDS = 5;

const User = db.define("user", {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true, //how to test this
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  phoneNum: {
    // Valid formats:
    // (123) 456-7890
    // (123)456-7890
    // 123-456-7890
    // 123.456.7890
    // 1234567890
    // +31636363634
    // 075-63546725
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    unique: true,
    validate: {
      isValidPhonNum: function (value) {
        const regex =
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        if (!regex.test(value)) {
          throw new Error("Phone Number Wrong Format");
        }
        return value;
      },
      notEmpty: true,
    },
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = User;

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
  //we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password);
};

// User.prototype.correctPhoneNum = function (phoneNum) {
//   return bcrypt.compare(phoneNum, this.phoneNum);
// };

User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT);
};

/**
 * classMethods
 */
User.authenticate = async function ({ email, password, phoneNum }) {
  const user = await this.findOne({ where: { email } });
  if (
    !user ||
    !(await user.correctPassword(password))
    // !(await user.correctPhoneNum(phoneNum))
  ) {
    const error = Error("Incorrect email/password/phone number");
    error.status = 401;
    throw error;
  }
  return user.generateToken();
};

User.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = User.findByPk(id);
    if (!user) {
      throw "nooo";
    }
    return user;
  } catch (ex) {
    const error = Error("bad token");
    error.status = 401;
    throw error;
  }
};

/**
 * hooks
 */
const hashPassword = async (user) => {
  //in case the password has been changed, we want to encrypt it with bcrypt
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};

// const hashPhoneNum = async (user) => {
//   if (user.changed("phoneNum")) {
//     user.phoneNum = await bcrypt.hash(user.phoneNum, SALT_ROUNDS);
//   }
// };

User.beforeCreate(hashPassword);
// User.beforeCreate(hashPhoneNum);
User.beforeUpdate(hashPassword);
// User.beforeUpdate(hashPhoneNum);
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));
// User.beforeBulkCreate((users) => Promise.all(users.map(hashPhoneNum)));
