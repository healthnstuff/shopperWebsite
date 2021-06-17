//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/static/user");
const Address = require("./models/static/userAddress");
const UserPayment = require("./models/static/userPayment");
const Product = require("./models/static/product");
const Category = require("./models/static/category");
const CartItem = require("./models/processed/CartItem");
const OrderInfo = require("./models/processed/orderInfo");

//associations could go here!
User.hasMany(Address);
Address.belongsTo(User);

User.hasMany(UserPayment);
UserPayment.belongsTo(User);

Category.hasMany(Product);
Product.belongsTo(Category);

/*
Magic Methods
https://medium.com/@julianne.marik/sequelize-associations-magic-methods-c72008db91c9
*/

CartItem.belongsTo(OrderInfo)
OrderInfo.hasMany(CartItem)

OrderInfo.belongsToMany(Product, { through: CartItem })

module.exports = {
  db,
  models: {
    OrderInfo,
    CartItem,
    User,
    Address,
    UserPayment,
    Product,
    Category,
  },
};
