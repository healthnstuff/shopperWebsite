const Sequelize = require('sequelize')
const db = require('../../db')

const CartItem = db.define('cartItem', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

CartItem.prototype.increaseQuantity = async function (num) {
    await this.increment({
        inventory: num
    });
}

CartItem.prototype.decreaseQuantity = async function (num) {
    await this.decrement({
        inventory: num
    });
}

module.exports = CartItem