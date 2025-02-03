const express = require("express");
const stateRoute = express.Router();
const {stateValidation} = require('../validations/state.validation'); 
const stateController = require('../controllers/state.controller')
const authMiddleware = require("../middleware/auth");
stateRoute.route('/createstate').post(authMiddleware,stateValidation,stateController.state);
stateRoute.route('/getState').get(authMiddleware,stateController.getState);
module.exports = stateRoute;