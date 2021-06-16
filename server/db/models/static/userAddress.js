const Sequelize = require("sequelize");
const db = require("../../db");

//to consider: should we make address required? state?
const Address = db.define("address", {
  addressLine: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
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
    },
  },
  country: {
    type: Sequelize.STRING,
  },
});

module.exports = Address;
