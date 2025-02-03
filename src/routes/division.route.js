const express = require("express");
const divisionRoute = express.Router();
const {divisionValidation} = require('../validations/division.validation'); 
const divisionController = require('../controllers/division.controller')

divisionRoute.route('/division').post(divisionValidation,divisionController.division);
divisionRoute.route('/getdivision').get(divisionController.getDivision);
module.exports = divisionRoute;