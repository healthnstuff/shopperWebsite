const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const { isLoggedIn } = require("../api/gateKeepingMiddleware");
module.exports = router;

//POST /auth/login assigns JWT token
router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});


//POST /auth/signup new user signup assign JWT token
router.post('/signup', async (req, res, next) => {
  try {
    // body('firstName', 'Empty name')
    //   .isAlpha().withMessage('First name must be alphabet letters.')
    // body('lastName', 'Empty name').trim().isLength({ min: 1 }).escape()
    //   .isAlpha().withMessage('Last name must be alphabet letters.')
    const user = await User.create(req.body)
    res.send({token: await user.generateToken()})
  } catch (err) {
    if (err.email === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
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


