const express = require("express");
const { createPayment } = require("./payment.services");

// Controllers


//middlewares


const paymentRouter = express.Router();


paymentRouter.post("/", createPayment)

module.exports = { paymentRouter }