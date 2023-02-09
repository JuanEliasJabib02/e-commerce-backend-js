const express = require('express')
const { authRouter } = require('../domains/auth/auth.routes')
const { categoryRouter } = require('../domains/categories/category.routes')
const { productRouter } = require('../domains/products/product.routes')
const { paymentRouter } = require('../domains/payment/payment.routes')
const { orderRouter } = require('../domains/order/order.routes')

const router = express.Router()
// Routes
router.use('/auth', authRouter)
router.use('/category', categoryRouter)
router.use('/product', productRouter)
router.use('/payment', paymentRouter)
router.use("/order", orderRouter)


module.exports = { router }
