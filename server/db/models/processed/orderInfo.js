const Sequelize = require('sequelize')
const db = require('../../db')

const OrderInfo = db.define('orderInfo', {
    total: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

module.exports = OrderInfo