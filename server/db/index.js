//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/static/User");
const Address = require("./models/static/userAddress");
const UserPayment = require("./models/static/userPayment");

//associations could go here!
User.hasMany(Address);
Address.belongsTo(User);
User.hasMany(UserPayment);
UserPayment.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Address,
    UserPayment,
  },
};
