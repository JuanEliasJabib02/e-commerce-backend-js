const express = require("express");


const orderRouter = express.Router()

orderRouter.post("/", (req, res, next) => {
  console.log(req.body)
})



module.exports = { orderRouter }