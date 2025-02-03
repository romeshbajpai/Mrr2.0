const express = require("express");
const districtRoute = express.Router();
const {districtValidation} = require('../validations/district.validation'); 
const districtController = require('../controllers/district.controller')
const authMiddleware = require("../middleware/auth");
districtRoute.route('/creatdistrict').post(authMiddleware,districtValidation,districtController.district);
districtRoute.route('/getDistrict').get(authMiddleware,districtController.getDistrict);
module.exports = districtRoute;