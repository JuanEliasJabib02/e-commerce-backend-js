// NPM
const { json } = require('express')
const express = require('express')
const cors = require('cors')
const { router } = require('./routes')
const swaggerUI = require('swagger-ui-express')
const helmet = require('helmet')
const compression = require('compression')
// Init models
const { Models } = require('./models/index')
// Utils
const { globalErrorHandler } = require('./utils/globalErrorHandler')
const { StatusCodes } = require('http-status-codes')
const { AppError } = require('./utils/appError')
const { openApiConfig } = require('./docs/swagger')

// Init app
const app = express()

// Api config

app.use(json())
app.use(cors())
app.use(helmet())
app.use(compression())

app.use(express.urlencoded({ extended: true  })) // For accept form-data

// Main route

app.use('/api/v1', router)

// Document api

app.use('/api/v1/doc',
  swaggerUI.serve,
  swaggerUI.setup(openApiConfig)
)

// Error endpoint not found
app.all('*', (req, res, next) => {
  return next(new AppError(
    `${req.method} ${req.url} not found in this server`,
    StatusCodes.NOT_FOUND,
    true
  ))
})

/*  */

// Global error Handler
app.use('*', globalErrorHandler)

module.exports = { app }
