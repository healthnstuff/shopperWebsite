//this is the access point for all things database related!

const db = require("./db");

<<<<<<< HEAD
const User = require('./models/User')

//associations could go here!
=======
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
>>>>>>> 65d52167691d804ab1ef2de7132fa465b1779339

module.exports = {
  db,
  models: {
    User,
<<<<<<< HEAD
=======
    Address,
    UserPayment,
    Product,
    Category,
    CartItem,
    Session,
>>>>>>> 65d52167691d804ab1ef2de7132fa465b1779339
  },
};
