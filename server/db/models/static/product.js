const Sequelize = require("sequelize");
const db = require("../../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
  },
  price: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.01,
      notEmpty: true
    },
    allowNull: false,
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0.01,
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
});

module.exports = Product;
