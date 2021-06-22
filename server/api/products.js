const router = require("express").Router();
const {
  models: { Product, Category },
} = require("../db");
const { isLoggedIn, isAdmin } = require("../api/gateKeepingMiddleware");
module.exports = router;

// POST /api/products (creates a new product; admin only)
router.post("/", isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    res.json(await Product.create(req.body));
  } catch (err) {
    next(err);
  }
});

// PUT /api/products/:id (updates an exisiting product; admin only)
router.put("/:id", isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const [n] = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    // n is the number of affected rows (will be 1 as long as the id is valid)
    res.json(n);
  } catch (err) {
    next(err);
  }
});

// PUT /api/products (performs a bulk update; admin only)
router.put("/", isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    // req.body should look like: { update: { fieldToUpdate: newValue }, query: { fieldToQuery: valueToQuery } }
    const { update, query } = req.body;
    const [n] = await Product.update(update, {
      where: query,
    });
    res.json(n);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/products/:id (deletes a single product; admin only)
router.delete("/:id", isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const n = await Product.destroy({
      where: { id: req.params.id },
    });
    res.json(n);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/products (bulk delete; admin only)
router.delete("/", isLoggedIn, isAdmin, async (req, res, next) => {
    try {
        const query = req.body;
        const n = await Product.destroy({
            where: query
        });
        res.json(n);
    } catch (err) {
        next(err);
    }
});

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
    const productById = await Product.findOne({
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
