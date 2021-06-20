const router = require("express").Router();
const {
  models: { OrderInfo },
} = require("../db");
const { isLoggedIn, isAdmin } = require("../api/gateKeepingMiddleware");
module.exports = router;

//if admin wants to check all orders
//q: add check for closed orders only?
router.get("/", isAdmin, async (req, res, next) => {
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
    //add guest id
    const newOrder = await OrderInfo.create({ total: 0, status: "open" });
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
router.delete("/:userId", isAdmin, async (req, res, next) => {
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

router.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json("error");
});
