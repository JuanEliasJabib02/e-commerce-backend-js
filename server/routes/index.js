const express = require("express");
const { authRouter } = require("../components/auth/auth.routes");


const router = express.Router();
//Routes
router.use("/auth", authRouter);

module.exports = { router };