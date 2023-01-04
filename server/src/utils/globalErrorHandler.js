const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

const sendErrorProduction = (err, req, res) => {
  const statusCode = err.statusCode || 500

  /* 6.20. Hide error details from clients - nodebestpractices */
  res.status(statusCode).json({
    status: "fail",
    message: err.message || "Something went very wrong"
  })
}

const sendErrorDevelopment = (err, req, res) => {

  const statusCode = err.statusCode || 500
  res.status(statusCode).json({
    status: "fail",
    message: err.message,
    error: err,
    stack: err.stack
  })
}


/**
 * 2.4 Handle errors centrally, not within a middleware - nodebestpractices
 */

const globalErrorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    return sendErrorProduction( err, req, res)
  }
  if (process.env.NODE_ENV === "development") {
    return sendErrorDevelopment(err,req,res)
  }
}

module.exports = { globalErrorHandler }
