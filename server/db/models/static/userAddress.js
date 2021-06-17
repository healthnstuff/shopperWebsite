const Sequelize = require("sequelize");
const db = require("../../db");

const Address = db.define("address", {
  addressLine: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  postalCode: {
    type: Sequelize.INTEGER,
    validate: {
      isPostalCode: function (value) {
        const regex = /^\d{5}$/;
        if (!regex.test(value)) {
          throw new Error("Wrong Postal Code Format");
        }
        return value;
      },
      notEmpty: true
    },
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
});

module.exports = Address;
