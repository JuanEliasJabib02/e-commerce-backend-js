const express = require('express')
// Controllers
const { signUp, login } = require('./auth.controller')
const { isUserAlreadyRegister } = require('./middlewares/isUserAlreadyRegister')


// Middlewares

const authRouter = express.Router()

// Endpoints

authRouter.post('/sign-up',
  isUserAlreadyRegister,
  signUp
)

authRouter.post('/login', login)

module.exports = { authRouter }

// Documentation

/**
 * @openapi
 * /auth/sign-up:
 *    post:
 *        tags:
 *            - auth
 *        summary: "register new user"
 *        description: "This route is for sign-up a new user"
 *        requestBody:
 *            content:
 *                application/json:
 *                    schema:
 *                        $ref: "#/components/schemas/authSignUp"
 *                    example:
 *                        firstName: person
 *                        lastName:  test
 *                        email: test@gmail.com
 *                        password: 4321password
 *        responses:
 *                "201":
 *                    description: User signup sucessfull
 *                "400":
 *                    description: register fail
 *
 */

/**
 * @openapi
 * /auth/login:
 *    post:
 *        tags:
 *            - auth
 *        summary: "login to the app"
 *        description: "This route is for  the login user"
 *        requestBody:
 *            content:
 *                application/json:
 *                    schema:
 *                        $ref: "#/components/schemas/authLogin"
 *                    example:
 *                        email: test@gmail.com
 *                        password: 4321password
 *        responses:
 *                "200":
 *                    description: login sucessfull
 *                "400":
 *                    description: login fail
 */
