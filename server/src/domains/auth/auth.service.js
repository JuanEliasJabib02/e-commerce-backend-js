const { User } = require('../users/user.model')
const { encrypt, compare } = require('../../utils/handlePassword')
const { Email } = require('../../services/email/email.service')
const jwt = require('jsonwebtoken')

const signUp = async (data) => {
  const { firstName, lastName, email, password } = data

  const userExist = await User.findOne({
    where: {
      email
    }
  })

  if (userExist) {
    return 'USER_ALREADY_EXIST'
  }

  const hashPassword = await encrypt(password)

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashPassword
  })

  user.password = undefined

  new Email(email).sendWelcome(firstName)

  return {user}
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
    return "USER_AND_PASSWORD_FAIL"
  }

  const passOkay = await compare(password, user.password)

  if (!passOkay) {
    return "USER_AND_PASSWORD_FAIL"
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SIGN, {
    expiresIn: '1d'
  })


  return {token}
}

module.exports = { signUp, login }
