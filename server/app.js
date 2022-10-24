const { json } = require("express");
const express = require("express");
const cors = require("cors");
const { router } = require("./routes");


const app = express();

//Api config
app.use(json());
app.use(cors());

// Main route

app.use("/api/v1", router)


// Error route not found


module.exports = { app };



// Global error Handler