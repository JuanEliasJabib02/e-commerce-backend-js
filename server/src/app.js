// NPM
const { json } = require('express')
const express = require('express')
const cors = require('cors')
const { router } = require('./routes')
const swaggerUI = require('swagger-ui-express')
const helmet = require('helmet')
const compression = require('compression')
//Init models
const {Models} = require("./models/index")
// Utils
const { globalErrorHandler } = require('./utils/globalErrorHandler')
const { openApiConfig } = require('./domains/docs/swagger')
const { StatusCodes } = require('http-status-codes')

// Init app
const app = express()

// Api config
app.use(json())
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.urlencoded({ extended: false })) // For accept form-data

// Main route

app.use('/api/v1', router)

// Document api

app.use('/api/v1/doc', swaggerUI.serve, swaggerUI.setup(openApiConfig))

// Error endpoint not found
app.all('*', (req, res) => {
  res.status(StatusCodes.NOT_FOUND)
    .json({error:`${req.method} ${req.url} not found in this server`})
})

// Global error Handler
app.use('*', globalErrorHandler)

module.exports = { app }
