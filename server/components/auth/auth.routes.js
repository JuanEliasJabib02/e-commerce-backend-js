const express = require("express");
//Controllers
const { signUp, login } = require("./auth.controller");

//Middlewares
const { signUpvalidator, loginValidator } = require("./middlewares/auth.validators");

const authRouter = express.Router();

//Endpoints

authRouter.post("/sign-up", signUpvalidator, signUp);
authRouter.post("/login", loginValidator,login);

module.exports = { authRouter };



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
 *                    description: User signup sucessfull
 * 
 */