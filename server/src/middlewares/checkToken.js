const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const { User } = require('../domains/users/user.model')

dotenv.config({ path: './config.env' })
const { StatusCodes } = require('http-status-codes')
const { AppError } = require('../utils/appError')

const checkToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return next(new AppError(
        'TOKEN_NOT_VALID',
        StatusCodes.UNAUTHORIZED
      ))
    }

    const token = req.headers.authorization.split(' ').pop()

    const decoded = jwt.verify(token, process.env.JWT_SIGN)

    const userActive = await User.findOne({
      where: {
        id: decoded.id,
        status: 'active'
      }
    })

    if (!userActive) {
      return next(new AppError(
        'USER_NOT_FOUND',
        StatusCodes.NOT_FOUND,
        true
      ))
    }

    req.userActive = userActive

    next()
  } catch (err) {
    if (err.message === 'jwt expired') {
      return next(new AppError(
        'TOKEN_EXPIRED',
        StatusCodes.FORBIDDEN
      ))
    }
    if (err.message === 'jwt malformed') {
      return next(new AppError(
        'TOKEN_IS_WRONG',
        StatusCodes.INTERNAL_SERVER_ERROR
      ))
    }
  }
}

module.exports = { checkToken }
