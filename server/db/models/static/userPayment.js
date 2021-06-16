const Sequelize = require("sequelize");
const db = require("../../db");

const UserPayment = db.define("userPayment", {
  cardNum: {
    type: Sequelize.BIGINT,
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
  },
  cvv: {
    type: Sequelize.INTEGER,
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
