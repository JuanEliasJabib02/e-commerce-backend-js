const express = require("express");
const { getOrders,createOrder } = require("./order.controller");


const orderRouter = express.Router()


/* This route is recivie a webhook from mercadopago when
the order is complete */
orderRouter.post("/", createOrder)


/* Only admin */
orderRouter.get("/", getOrders)


/* Get Order By Id */

/* Update order to ship */


module.exports = { orderRouter }