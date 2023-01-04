const express = require('express')
// Controllers
const { signUp, login } = require('./auth.controller')
const { validateAuth, validateLogin } = require('./middlewares/auth.validators')

// Middlewares

const authRouter = express.Router()

// Endpoints

authRouter.post('/sign-up',
  validateAuth,
  signUp
)

authRouter.post('/login',
  validateLogin,
  login
)

module.exports = { authRouter }
