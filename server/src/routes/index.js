const express = require('express')
const { authRouter } = require('../domains/auth/auth.routes')
const { categoryRouter } = require('../domains/categories/category.routes')
const { productRouter } = require('../domains/products/product.routes')

const router = express.Router()
// Routes
router.use('/auth', authRouter)
router.use("/category", categoryRouter)
router.use("/product", productRouter)

module.exports = { router }
