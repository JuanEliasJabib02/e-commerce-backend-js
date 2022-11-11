const express = require("express");
//Controllers
const { signUp, login } = require("./auth.controller");

//Middlewares
const { signUpvalidator, loginValidator } = require("./middlewares/auth.validators");



const authRouter = express.Router();

//Endpoints

/**
 * @openapi
 * /auth/sign-up:
 *    post:
 *        tags:
 *            - auth
 *        summary: "register new user"
 * 
 */


authRouter.post("/sign-up", signUpvalidator, signUp);
authRouter.post("/login", loginValidator,login);

module.exports = { authRouter };