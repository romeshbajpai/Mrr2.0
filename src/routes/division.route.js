const express = require("express");
const divisionRoute = express.Router();
const {divisionValidation} = require('../validations/division.validation'); 
const divisionController = require('../controllers/division.controller')
const authMiddleware = require("../middleware/auth");
divisionRoute.route('/division').post(authMiddleware,divisionValidation,divisionController.division);
divisionRoute.route('/getdivision').get(authMiddleware,divisionController.getDivision);
module.exports = divisionRoute;