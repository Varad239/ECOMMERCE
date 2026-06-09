const express = require("express");
const Order = require("../models/Order");
const authMiddleware =
  require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  async (req, res) => {
    const order =
      await Order.create({
        user: req.user.id,
        products: req.body.products,
        totalAmount:
          req.body.totalAmount
      });

    res.status(201).json(order);
  }
);

router.get(
  "/myorders",
  authMiddleware,
  async (req, res) => {
    const orders =
      await Order.find({
        user: req.user.id
      }).populate(
        "products.product"
      );

    res.json(orders);
  }
);

module.exports = router;