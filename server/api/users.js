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

router.post("/", async (req, res, next) => {
  try {
    //form entry validations
    // body("firstName", "Empty name")
    //   .isAlpha()
    //   .withMessage("First name must be alphabet letters.");
    // body("lastName", "Empty name")
    //   .trim()
    //   .isLength({ min: 1 })
    //   .escape()
    //   .isAlpha()
    //   .withMessage("Last name must be alphabet letters.");
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return errors.array();
    } else {
      let alreadyExists = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (alreadyExists) {
        res.status(409).send("User with email already exists");
      } else {
        let newUser = await User.create(req.body);
        res.status(201).json(newUser);
      }
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    //validations HERE
    let user = await User.findByPk(req.params.id);
    let updatedUser = await user.update({
      email: req.body.email || user.email,
      firstName: req.body.firstName || user.firstName,
      lastName: req.body.lastName || user.lastName,
      phoneNum: req.body.phoneNum || user.phoneNum,
      password: req.body.password || user.password,
    });
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
<<<<<<< HEAD
});
=======
});
// GET /api/users/:id (serves up a single user; admin only)
router.get("/:id", isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const { firstName, lastName, email, phoneNum, isAdmin } =
      await User.findByPk(req.params.id);
    res.json({
      firstName,
      lastName,
      email,
      phoneNum,
      isAdmin,
    });
  } catch (err) {
    next(err);
  }
});
>>>>>>> main
