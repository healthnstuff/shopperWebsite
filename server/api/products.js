const router = require('express').Router()
const Category = require('../db/models/static/category')
const Product = require('../db/models/static/product')
module.exports = router

//api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
        include: {
            model: Category,
            as: 'category'
        }
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})

//api/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const productById = await Product.findAll({
        where: {
            id: req.params.id
        },
        include: {
            model: Category,
            as: 'category'
        }
    })
    res.json(productById)
  } catch (err) {
    next(err)
  }
})
