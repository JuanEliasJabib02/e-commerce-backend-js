const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../../utils/appError");
const { Order } = require("./order.model");
const mercadopago = require("mercadopago");
mercadopago.configure({access_token:process.env.MERCADOPAGO_ACCCES_TOKEN})



const getOrders = async () => {

  console.log("we are here")

}




/* This order is for update the status of the order when the pay
is complete in mercadopago */

const createOrder = async (req, res, next) => {
  try {
  const data = req.body;
  const id = data?.data?.id

  const payment = await mercadopago.payment.get(id)

  console.log("before the payment")
    console.log(payment)
  console.log("after the payment")
  return null
  } catch (error) {
    console.log(error)
  }
  
}

module.exports = { getOrders,createOrder }