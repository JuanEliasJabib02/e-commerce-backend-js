//NPM
const { json } = require("express");
const express = require("express");
const cors = require("cors");
const { router } = require("./routes");
//Init models
const { Models } = require("./models");
//Utils
const { handleHttpError } = require("./utils/handleHttpError");
const { globalErrorHandler } = require("./utils/globalErrorHandler");

const app = express();

//Api config
app.use(json());
app.use(cors());

// Main route

app.use("/api/v1", router)


 // Error endpoint not found 
app.all('*', (req, res) => {
  handleHttpError(res, `${req.method} ${req.url} not found in this server`, 404)
});

 // Global error Handler
app.use("*", globalErrorHandler);


module.exports = { app };



