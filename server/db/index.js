//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const CartItem = require('./models/CartItem');
const Session = require('./models/Session');

//associations could go here!
Session.belongsTo(User);
User.hasOne(Session);

CartItem.belongsTo(Session);
Session.hasMany(CartItem);

module.exports = {
  db,
  models: {
    User,
    CartItem,
    Session
  },
}
