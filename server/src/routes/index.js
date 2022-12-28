const express = require('express');
const { authRouter } = require('../domains/auth/auth.routes');

const router = express.Router();
//Routes
router.use('/auth', authRouter);

module.exports = { router };
