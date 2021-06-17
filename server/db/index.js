//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/static/user");
const Address = require("./models/static/userAddress");
const UserPayment = require("./models/static/userPayment");
const Product = require("./models/static/product");
const Category = require("./models/static/category");
const CartItem = require("./models/CartItem");
const Session = require("./models/Session");

//associations could go here!
User.hasMany(Address);
Address.belongsTo(User);

User.hasMany(UserPayment);
UserPayment.belongsTo(User);

Category.hasMany(Product);
Product.belongsTo(Category);

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
    Address,
    UserPayment,
    Product,
    Category,
    CartItem,
    Session,
  },
};
