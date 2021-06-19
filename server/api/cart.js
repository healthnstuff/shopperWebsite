const router = require("express").Router();
const {
  models: { CartItem, Product },
} = require("../db");
module.exports = router;

//not sure if this will be necessary, since can't serve products
router.get("/", async (req, res, next) => {
  try {
    const cart = await CartItem.findAll();
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const product = req.body.product;
    // const product = await axios.get("");
    const item = await CartItem.create({
      quantity: 1,
      productId: 7,
      orderInfoId: 2,
    });
    res.json(item);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json("error");
});
