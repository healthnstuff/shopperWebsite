//this is the access point for all things database related!

const db = require('./db')

const OrderItem = require('./models/processed/orderItem')
const OrderInfo = require('./models/processed/orderInfo')
// const Product = require('./models/product')
const User = require('./models/User')
const CartItem = require('./models/CartItem');
const Session = require('./models/Session');

//associations could go here!
Session.belongsTo(User);
User.hasOne(Session);

CartItem.belongsTo(Session);
Session.hasMany(CartItem);

/*
Magic Methods
https://medium.com/@julianne.marik/sequelize-associations-magic-methods-c72008db91c9
*/

//processed model associations
// OrderItem.belongsTo(Product)
// Product.hasOne(OrderItem)

OrderItem.belongsTo(OrderInfo)
OrderInfo.hasMany(OrderItem)

// OrderInfo.belongsTo(User)
// User.hasMany(OrderInfo)

module.exports = {
  db,
  models: {
    // Product,
    OrderInfo,
    OrderItem,
    User,
    CartItem,
    Session
  },
}
