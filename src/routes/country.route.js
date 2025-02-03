const express = require("express");
const countryRoute = express.Router();
const {countryValidation} = require('../validations/country.validation'); 
const countryController = require('../controllers/country.controller')
const authMiddleware = require("../middleware/auth");
countryRoute.route('/country').post(authMiddleware,countryValidation,countryController.country);

module.exports = countryRoute;