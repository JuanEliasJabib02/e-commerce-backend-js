const express = require("express");
const { getOrders } = require("./order.controller");


const orderRouter = express.Router()

orderRouter.post("/", (req, res, next) => {
  console.log(req.body)
})


/* Only admin */
orderRouter.get("/", getOrders)


/* Get Order By Id */

/* Update order to ship */


module.exports = { orderRouter }