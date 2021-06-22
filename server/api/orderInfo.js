const router = require("express").Router();
const {
  models: { OrderInfo, CartItem, Product },
} = require("../db");
const { isLoggedIn, isAdmin } = require("../api/gateKeepingMiddleware");
module.exports = router;

//if admin wants to check all orders
//q: add check for closed orders only?
//add isAdmin
router.get("/", isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const orders = await OrderInfo.findAll();
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

// get a user's past orders
router.get("/:userId", isLoggedIn, async (req, res, next) => {
  try {
    const user = req.params.userId;
    const pastOrders = await OrderInfo.findAll({
      where: {
        userId: user,
        status: "closed",
      },
    });
    res.json(pastOrders);
  } catch (err) {
    next(err);
  }
});

//only when guests check out
router.post("/", async (req, res, next) => {
  try {
    //add guest id
    const newOrder = await OrderInfo.create({ total: 0, status: "closed" });
    res.json(newOrder);
  } catch (err) {
    next(err);
  }
});

//logged in user
router.post("/:userId", async (req, res, next) => {
  try {
    const user = req.params.userId;
    const newOrder = await OrderInfo.create({
      total: 0,
      status: "open",
      userId: user,
    });
    res.json(newOrder);
  } catch (err) {
    next(err);
  }
});

//when user checks out
router.put("/:userId", async (req, res, next) => {
  try {
    const user = req.params.userId;
    const order = await OrderInfo.findOne({
      where: {
        userId: user,
        status: "open",
      },
    });
    await order.update({ status: "closed" });
    res.json(order);
  } catch (err) {
    next(err);
  }
});

//later when a user times out
//needs more specification?
router.delete("/:userId", isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const user = req.params.userId;
    const deletedOrder = await OrderInfo.findOne({
      where: {
        userId: user,
        status: "open",
      },
    });
    await deletedOrder.destroy();
    res.json(deletedOrder);
  } catch (err) {
    next(err);
  }
});

//cart --> /api/orderInfo/cart/:userId
router.get("/cart/:userId", async (req, res, next) => {
  try {
    const user = req.params.userId;
    const session = await OrderInfo.findOne({
      where: {
        userId: user,
        status: "open",
      },
    });
    const sessionId = session.id;
    const cart = await CartItem.findAll({
      where: {
        orderInfoId: sessionId,
      },
    });
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

//adds item to cart
router.post("/cart/:userId", async (req, res, next) => {
  try {
    const user = req.params.userId;
    const product = req.body.productId; //product id
    const quantity = req.body.quantity; //optional
    const session = await OrderInfo.findOne({
      where: {
        userId: user,
        status: "open",
      },
    });
    const sessionId = session.id;
    const item = await CartItem.create({
      quantity: quantity,
      productId: product,
      orderInfoId: sessionId,
    });
    res.json(item);
  } catch (err) {
    next(err);
  }
});

router.put("/cart/:userId", async (req, res, next) => {
  try {
    //req.body = { product: productId, change: increase or decrease, quantity: quantity of change}
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
    const change = req.body.change;
    if (change === "increase") {
      await productInCart.increaseQuantity(req.body.quantity);
    } else {
      await productInCart.decreaseQuantity(req.body.quantity);
    }
    // await productInCart.update(req.body); //may edit this line later
    res.send(productInCart);
  } catch (err) {
    next(err);
  }
});

//delete single item
router.delete("/cart/:userId/:productId", async (req, res, next) => {
  try {
    const user = req.params.userId;
    const product = req.params.productId;
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
    await productInCart.destroy();
  } catch (err) {
    next(error);
  }
});

//when emptying cart, delete cartItem first
router.delete("/cart/:userId", async (req, res, next) => {
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

router.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json("error");
});
