const Sequelize = require('sequelize')
const db = require('../../db')

const OrderInfo = db.define('orderInfo', {
    total: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            min: 0
        }
    },
    status: {
        type: Sequelize.ENUM('open', 'closed'),
        validate: {
            isIn: [['open', 'closed']]
        }
    }
});

module.exports = OrderInfo