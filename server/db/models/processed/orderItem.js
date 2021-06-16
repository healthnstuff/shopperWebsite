const Sequelize = require('sequelize')
const db = require('../../db')

const OrderItem = db.define('orderItem', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

OrderItem.addItem = function (item) {
    this.addOrderInfo(item)
}

module.exports = OrderItem