const express = require("express");
//Controllers
const { signUp, login } = require("./auth.controller");
//Middlewares



const authRouter = express.Router();

//Endpoints


authRouter.post("/sign-up", signUp);
authRouter.post("/login", login);

module.exports = { authRouter };