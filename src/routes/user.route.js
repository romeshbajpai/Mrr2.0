const express = require("express");
const { registerValidation } = require("../validations/user.validation");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth");
const userRoute = express.Router();

userRoute.route("/register").post(registerValidation, userController.register);
userRoute.route("/login").post(userController.login);
userRoute.route("/get_all_users").get(authMiddleware,userController.get_all_users);

module.exports = userRoute;