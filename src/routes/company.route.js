const express = require("express");
const companyController = require("../controllers/company.controller");
const { companyValidation } = require("../validations/company.validation");

const companyRoute = express.Router();

companyRoute.route("/createcompany").post(companyValidation, companyController.addCompany);
companyRoute.route("/:id").put(companyController.updateCompany);

module.exports = companyRoute;