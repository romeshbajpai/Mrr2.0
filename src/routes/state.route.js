const express = require("express");
const stateRoute = express.Router();
const {stateValidation} = require('../validations/state.validation'); 
const stateController = require('../controllers/state.controller')

stateRoute.route('/createstate').post(stateValidation,stateController.state);
stateRoute.route('/getState').get(stateController.getState);
module.exports = stateRoute;