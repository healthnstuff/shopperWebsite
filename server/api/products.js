const router = require("express").Router();
const {
  models: { Product },
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
    // n is the number of affected case (will always be 1 for this route)
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

router.delete("/:id", isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const n = await Product.destroy({
      where: { id: req.params.id },
    });
    if (!n) {
      res.json("Product not found");
    } else {
      res.json(n);
    }
  } catch (err) {
    next(err);
  }
});
