const { StatusCodes } = require("http-status-codes")
const { AppError } = require("../../utils/appError")

//Services
const paymentServices = require('./payment.services')

const createPayment = async (req,res,next) => {
  try {

    const orderData = req.body.orderData
    const cart = req.body.cart
    
    
    const response = await paymentServices.createPayment(orderData, cart)
    
    console.log(response)
    
    res.status(StatusCodes.OK).json(response)
    
  } catch (error) {
    AppError(error)
  }
  
}



module.exports = {createPayment}

