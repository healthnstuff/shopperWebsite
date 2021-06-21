const Sequelize = require("sequelize");
const db = require("../../db");

const CartItem = db.define("cartItem", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

CartItem.prototype.increaseQuantity = async function (num) {
  await this.increment({
    quantity: num,
  });
};

CartItem.prototype.decreaseQuantity = async function (num) {
  await this.decrement({
    quantity: num,
  });
};

module.exports = CartItem;
