const router = require('express').Router()
const { body, validationResult } = require('express-validator');
const { models: {User }} = require('../db')
module.exports = router


//user login authentication route
router.post('/login', async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body)}); 
  } catch (err) {
    next(err)
  }
})


//new user signup
router.post('/signup', async (req, res, next) => {
  try {
    body('firstName', 'Empty name')
      .isAlpha().withMessage('First name must be alphabet letters.')
    body('lastName', 'Empty name').trim().isLength({ min: 1 }).escape()
      .isAlpha().withMessage('Last name must be alphabet letters.')
    const user = await User.create(req.body)
    res.send({token: await user.generateToken()})
  } catch (err) {
    if (err.email === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.get('/me', async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization))
  } catch (ex) {
    next(ex)
  }
})
