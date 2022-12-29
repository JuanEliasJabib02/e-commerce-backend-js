const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const { StatusCodes } = require("http-status-codes")

const globalErrorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: 'fail',
      error: 'INTERNAL_ERROR_SERVER'
    })
  } else {
  /*   console.log(err) */
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: 'fail',
      error: {
        message: err.message,
        stack: err.stack
      }
    })
  }
}

module.exports = { globalErrorHandler }
