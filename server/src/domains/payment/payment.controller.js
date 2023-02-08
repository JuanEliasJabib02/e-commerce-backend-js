const { StatusCodes } = require("http-status-codes")
const { AppError } = require("../../utils/appError")

//Services
const paymentServices = require('./payment.services')

const createPayment = async (req,res,next) => {
º
  try {

    const response = paymentServices.createPayment(req, res, next)
    
    res.status(StatusCodes.OK).json(response)
    
  } catch (error) {
    AppError(error)
  }
  
}



module.exports = {createPayment}

