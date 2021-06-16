const Sequelize = require("sequelize");
const db = require("../../db");

const Address = db.define("address", {
  addressLine: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  postalCode: {
    type: Sequelize.INTEGER,
  },
  country: {
    type: Sequelize.STRING,
  },
});

module.exports = Address;
