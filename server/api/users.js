const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const { isLoggedIn, isAdmin } = require("./gateKeepingMiddleware");
module.exports = router;

// GET /api/users (serves up all users; only accessible to logged in users with admin priviledges)
router.get("/", isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "email", "firstName", "lastName"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// GET /api/users/:id (serves up a single user; only accessible to logged in users with admin priviledges)
router.get("/:id", isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const { firstName, lastName, email, phoneNum, isAdmin } = await User.findByPk(req.params.id);
    res.json({
      firstName,
      lastName,
      email,
      phoneNum,
      isAdmin
    });
  } catch (err) {
    next(err);
  }
});