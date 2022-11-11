const express = require("express");
const { authRouter } = require("../components/auth/auth.routes");
const { categoryRouter } = require("../components/categories/categories.routes");


const router = express.Router();
//Routes


router.use("/auth", authRouter);
router.use("/categories", categoryRouter);

module.exports = { router };