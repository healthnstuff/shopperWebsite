const Sequelize = require("sequelize");
const db = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios");
const SALT_ROUNDS = 5;

const UserPayment = db.define("userPayment", {
  cardNum: {
    type: Sequelize.STRING,
    isCreditCard: true,
    validate: {
      isCardNum: function (value) {
        const regex = /^\d{16}$/;
        if (!regex.test(value)) {
          throw new Error("Wrong card number format!");
        }
        return value;
      },
    },
  },
  expirationDate: {
    //Date format new Date(YYYY, MM, DD) where MONTH IS INDEXED --> January = 0, December = 11
    type: Sequelize.DATE,
    //get rid of time?
    isDate: true,
  },
  provider: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cvv: {
    type: Sequelize.STRING,
    validate: {
      isCvv: function (value) {
        const regex = /^\d{3}$/;
        if (!regex.test(value)) {
          throw new Error("Wrong CVV format!");
        }
        return value;
      },
    },
  },
});

module.exports = UserPayment;

UserPayment.prototype.correctCardNum = function (cardNum) {
  return bcrypt.compare(cardNum, this.cardNum);
};

UserPayment.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT);
};

UserPayment.authenticate = async function ({ cvv, cardNum }) {
  const payment = await this.findOne({ where: { cvv } });
  if (!payment || !(await payment.correctCardNum(cardNum))) {
    const error = Error("Incorrect Card Number");
    error.status = 401;
    throw error;
  }
  return payment.generateToken();
};

UserPayment.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const payment = UserPayment.findByPk(id);
    if (!payment) {
      throw "sad";
    }
  } catch (ex) {
    const error = Error("bad token");
    error.status = 401;
    throw error;
  }
};

const hashCardNum = async (payment) => {
  if (payment.changed("cardNum")) {
    payment.cardNum = await bcrypt.hash(payment.cardNum, SALT_ROUNDS);
  }
};

UserPayment.beforeCreate(hashCardNum);
UserPayment.beforeUpdate(hashCardNum);
UserPayment.beforeBulkCreate((payments) =>
  Promise.all(payments.map(hashCardNum))
);
