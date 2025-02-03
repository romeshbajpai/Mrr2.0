const express = require("express");
const companyController = require("../controllers/company.controller");
const { companyValidation } = require("../validations/company.validation");
const authMiddleware = require("../middleware/auth");
const companyRoute = express.Router();

companyRoute.route("/createcompany").post(authMiddleware,companyValidation, companyController.addCompany);
companyRoute.route("/:id").put(authMiddleware,companyController.updateCompany);

module.exports = companyRoute;