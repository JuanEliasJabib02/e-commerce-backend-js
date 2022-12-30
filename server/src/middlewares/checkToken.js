const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const {User} = require("../domains/users/user.model")

dotenv.config({ path: './config.env' })
const { StatusCodes } = require('http-status-codes')

const checkToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      res.status(StatusCodes.UNAUTHORIZED)
        .json({ error: "TOKEN_NOT_VALID" })
      return
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
      res.status(StatusCodes.NOT_FOUND)
        .json({error:"USER_NOT_FOUND"})
      return
    }

    req.userActive = userActive

    next()
  } catch (err) {
    if (err.message === "jwt expired") {
      res.status(StatusCodes.FORBIDDEN)
        .json({ error: "TOKEN EXPIRED" })
      return
    }
    if (err.message === "jwt malformed") {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: "TOKEN IS WRONG" })
      return
    }

    next(err)
    
  }
}

module.exports = { checkToken }
