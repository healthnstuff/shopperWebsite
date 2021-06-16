//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/static/user");
const Address = require("./models/static/userAddress");
const UserPayment = require("./models/static/userPayment");
const Product = require("./models/static/product");
const Category = require("./models/static/category");

//associations could go here!
User.hasMany(Address);
Address.belongsTo(User);
User.hasMany(UserPayment);
UserPayment.belongsTo(User);
Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = {
  db,
  models: {
    User,
    Address,
    UserPayment,
    Product,
    Category,
  },
};
