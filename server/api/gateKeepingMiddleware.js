const {
  models: { User },
} = require("../db");

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    res.status(403).send("Admin only");
  } else {
    next();
  }
};

module.exports = {
  isLoggedIn,
  isAdmin,
};
