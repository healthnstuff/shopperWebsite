//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')

const OrderItem = require('./models/processed/orderItem')

const OrderInfo = require('./models/processed/orderInfo')

const Product = require('./models/product')

//associations could go here!

/*
Magic Methods
https://medium.com/@julianne.marik/sequelize-associations-magic-methods-c72008db91c9
*/

//processed model associations
OrderItem.belongsTo(Product)
Product.hasOne(OrderItem)

OrderItem.belongsTo(OrderInfo)
OrderInfo.hasMany(OrderItem)

OrderInfo.belongsTo(User)
User.hasMany(OrderInfo)

module.exports = {
  db,
  models: {
    User,
    Product,
    OrderInfo,
    OrderItem
  },
}
