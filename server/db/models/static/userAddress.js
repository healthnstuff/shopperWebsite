const Sequelize = require("sequelize");
const db = require("../../db");

//to consider: should we make address required? state?
const Address = db.define("address", {
  addressLine: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmptyString: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmptyString: false,
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
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmptyString: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmptyString: false,
  },
});

module.exports = Address;
