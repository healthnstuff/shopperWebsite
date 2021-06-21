const router = require('express').Router()
const { models: { User }} = require('../db')
const { isLoggedIn, isAdmin } = require("./gateKeepingMiddleware");

module.exports = router;

// GET /api/users (serves up all users; admin only)
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

// GET /api/users/:id (serves up a single user; admin only)
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

//update user: logged in or admin only
router.put('/:id', async (req, res, next) => {
  try {
    //validations HERE
    let user = await User.findByPk(req.params.id);
    let updatedUser = await user.update({
      email: req.body.email || user.email,
      firstName: req.body.firstName || user.firstName,
      lastName: req.body.lastName || user.lastName,
      phoneNum: req.body.phoneNum || user.phoneNum,
      password: req.body.password || user.password})
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
});