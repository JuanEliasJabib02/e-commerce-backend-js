const express = require("express");
//Controllers
const { signUp, login } = require("./auth.controller");

//Middlewares
const { signUpvalidator } = require("./middlewares/auth.validators");



const authRouter = express.Router();

//Endpoints


authRouter.post("/sign-up", signUpvalidator, signUp);
authRouter.post("/login", login);

module.exports = { authRouter };