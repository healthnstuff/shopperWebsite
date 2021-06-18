const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const { isLoggedIn } = require("../api/gateKeepingMiddleware");
module.exports = router;

router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

// GET /auth/me (serves up a user's profile info; protects isAdmin and id fields)
router.get("/me", isLoggedIn, async (req, res, next) => {
  if (req.user) {
    const { email, password, firstName, lastName, phoneNum } = req.user;
    res.json({
      email,
      password,
      firstName,
      lastName,
      phoneNum,
    });
  } else {
    next();
  }
});
