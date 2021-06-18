const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'firstName']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log("DID WE MAKE IT HERE", req.body)
    let alreadyExists = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    if(alreadyExists) {
      res.status(409).send('User with email already exists')
    } else {
        const NEW = req.body;
        console.log(">>>>>>>>>>>>>>>", NEW)
        let newUser = await User.create({
          email: NEW.email, 
          password: NEW.password, 
          firstName: NEW.firstName, 
          lastName: NEW.lastName, 
          phoneNum: NEW.phoneNum});
        res.status(201).json(newUser)
    }
  } catch(error) { next(error) }
});
