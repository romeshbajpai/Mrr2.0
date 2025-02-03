const express = require("express");
const districtRoute = express.Router();
const {districtValidation} = require('../validations/district.validation'); 
const districtController = require('../controllers/district.controller')

districtRoute.route('/creatdistrict').post(districtValidation,districtController.district);
districtRoute.route('/getDistrict').get(districtController.getDistrict);
module.exports = districtRoute;