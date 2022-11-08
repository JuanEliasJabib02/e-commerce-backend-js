const express = require("express");

const { addCategory } = require("./categories.controller");

//Controllers

//Middlewares
const { checkToken } = require("../../middlewares/checkToken");

const categoryRouter = express.Router();


//Endpoints

//getCategories
// Add categories ( Onlyadmin)
categoryRouter.post("/add-category", checkToken ,addCategory);
// Update categorie ( OnlyAdmin )
// Delete categorie ( OnlyAdmin)





module.exports = { categoryRouter };