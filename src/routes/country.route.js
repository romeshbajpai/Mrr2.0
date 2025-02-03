const express = require("express");
const countryRoute = express.Router();
const {countryValidation} = require('../validations/country.validation'); 
const countryController = require('../controllers/country.controller')

countryRoute.route('/country').post(countryValidation,countryController.country);

module.exports = countryRoute;