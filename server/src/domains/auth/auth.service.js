const { User } = require('../users/user.model')
const { encrypt, compare } = require('../../utils/handlePassword')
const { Email } = require('../../services/email/email.service')
const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const { AppError } = require('../../utils/appError')

const signUp = async (data) => {
  const { firstName, lastName, email, password, role } = data

  const userExist = await User.findOne({
    where: {
      email
    }
  })

  if (userExist) {
    return new AppError(
      'USER_ALREADY_EXIST',
      StatusCodes.BAD_REQUEST,
      true
    )
  }

  const hashPassword = await encrypt(password)

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
    role
  })

  user.password = undefined

  new Email(email).sendWelcome(firstName)

  return { user }
}


const login = async (data) => {
  const { email, password } = data

  const user = await User.findOne({
    where: {
      email,
      status: 'active'
    }
  })

  if (!user) {
    return new AppError(
      'USER_AND_PASSWORD_FAIL',
      StatusCodes.BAD_REQUEST,
      true
    )
  }
  const passOkay = await compare(password, user.password)

  if (!passOkay) {
    return new AppError(
      'USER_AND_PASSWORD_FAIL',
      StatusCodes.BAD_REQUEST,
      true
    )
 }

  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SIGN,
    { expiresIn: '1d' }
  )

  user.password = undefined 
  

  return { user, token }
}

module.exports = { signUp, login }
