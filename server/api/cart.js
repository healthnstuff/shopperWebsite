const router = require("express").Router();
const {
  models: { CartItem, Product, OrderInfo },
} = require("../db");
const axios = require("axios");
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

router.get("/:userId", async (req, res, next) => {
  try {
    //find orderInfo
  } catch (err) {
    next(err);
  }
});

//how will we find the orderInfo route for this
// router.post("/", async (req, res, next) => {
//   try {
//       const product = req.body.productId;
//       const session = await OrderInfo.findOne
//   } catch (err) {
//     next(err);
//   }
// });

router.post("/:userId", async (req, res, next) => {
  try {
    const user = req.params.userId;
    const product = req.body.productId; //product id
    const session = await OrderInfo.findOne({
      where: {
        userId: user,
        status: "open",
      },
    });
    const sessionId = session.id;
    const item = await CartItem.create({
      quantity: 1,
      productId: product,
      orderInfoId: sessionId,
    });
    res.json(item);
  } catch (err) {
    next(err);
  }
});

router.put("/:userId", async (req, res, next) => {
  try {
    const user = req.params.userId;
    const product = req.body.productId;
    const session = await OrderInfo.findOne({
      where: {
        userId: user,
        status: "open",
      },
    });
    const sessionId = session.id;
    const productInCart = await CartItem.findOne({
      where: {
        orderInfoId: sessionId,
        productId: product,
      },
    });
    await productInCart.update(req.body); //may edit this line later
    res.send(productInCart);
  } catch (err) {
    next(err);
  }
});

//when emptying cart, delete cartItem first
router.delete("/:userId", async (req, res, next) => {
  try {
    const user = req.params.userId;
    const session = await OrderInfo.findOne({
      where: {
        userId: user,
        status: "open",
      },
    });
    const sessionId = session.id;
    const productsInCart = await CartItem.findAll({
      where: {
        orderInfoId: sessionId,
      },
    });
    await productsInCart.destroy();
    res.json(productsInCart);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json("error");
});
