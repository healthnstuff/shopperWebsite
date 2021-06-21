const Sequelize = require('sequelize')
const db = require('../../db')

const OrderInfo = db.define('orderInfo', {
    total: {
        type: Sequelize.BIGINT,
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

OrderInfo.prototype.increaseTotal = async function (num) {
    await this.increment({
        total: num
    });
}

OrderInfo.prototype.decreaseTotal = async function (num) {
    await this.decrement({
        total: num
    });
}

// FOR TESTING PURPOSES:
async function testIncrementAndDecrement () {
    const orderInfoInstance = await OrderInfo.create({
        userId: 6,
        total: 1000,
        status: "closed",
    });
    console.log(orderInfoInstance)
    // console.log('original total = ', orderInfoInstance.total)
    // await orderInfoInstance.increaseTotal(1);
    // console.log('total after increase = ', orderInfoInstance.total)
    // await orderInfoInstance.decreaseTotal(5);
    // console.log('total after decrease = ', orderInfoInstance.total)
}

// testIncrementAndDecrement()

module.exports = OrderInfo