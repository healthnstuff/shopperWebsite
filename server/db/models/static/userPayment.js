const Sequelize = require("sequelize");
const db = require("../../db");

const UserPayment = db.define("userPayment", {
  cardNum: {
    type: Sequelize.INTEGER,
    //validate
  },
  expirationDate: {
    type: Sequelize.DATE,
  },
  provider: {
    type: Sequelize.STRING,
  },
});

module.exports = UserPayment;
