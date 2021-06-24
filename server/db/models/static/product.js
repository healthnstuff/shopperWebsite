const Sequelize = require("sequelize");
const db = require("../../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  price: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.01,
      notEmpty: true,
    },
    allowNull: false,
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://i.pinimg.com/736x/e1/77/3a/e1773a423d85a263e99a76ba2bcaf78a.jpg",
  },
});

// Adds num to the instance's current inventory value
Product.prototype.increaseInventory = async function (num) {
  await this.increment({
    inventory: num,
  });
};

// Subtracts num from the instance's current inventory value
Product.prototype.decreaseInventory = async function (num) {
  await this.decrement({
    inventory: num,
  });
};

module.exports = Product;
