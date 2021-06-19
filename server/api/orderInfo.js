const router = require("express").Router();
const {
  models: { CartItem, Product, OrderInfo },
} = require("../db");
module.exports = router;

//if admin wants to check all orders
//q: add check for closed orders only?
router.get("/", async (req, res, next) => {
  try {
    const orders = await OrderInfo.findAll();
    res.json(orders);
  } catch (err) {
    next(err);
  }
});
// get a user's past orders
router.get("/:userId", async (req, res, next) => {
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

//guests
router.post("/", async (req, res, next) => {
  try {
    const newOrder = OrderInfo.create({ total: 0, status: "open" });
    res.json(newOrder);
  } catch (err) {
    next(err);
  }
});

//logged in user
router.post("/:userId", async (req, res, next) => {
  try {
    const user = req.params.userId;
    const newOrder = OrderInfo.create({
      total: 0,
      status: "open",
      userId: user,
    });
    res.json(newOrder);
  } catch (err) {
    next(err);
  }
});

//later when a user times out
//needs more specification, haven't tested
router.delete("/:userId", async (req, res, next) => {
  try {
    const user = req.params.userId;
    const deletedOrder = OrderInfo.delete({
      where: {
        userId: user,
        status: "open",
      },
    });
    res.json(deletedOrder);
  } catch (err) {
    next(err);
  }
});
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json("error");
});
