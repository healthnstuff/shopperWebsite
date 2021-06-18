const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const { isLoggedIn, isAdmin } = require("./gateKeepingMiddleware");
module.exports = router;

// GET /api/users (only accessible to logged in users with admin priviledges)
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

router.get("/:id", isLoggedIn, async (req, res, next) => {
  try {
    const { firstName, lastName, email, phoneNum } = req.user;
    res.json({
      firstName,
      lastName,
      email,
      phoneNum
    });
  } catch (err) {
    next(err);
  }
});
