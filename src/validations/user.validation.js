const { validationResult, check } = require("express-validator");

 const registerValidation = [
    // check("companyName")
    //     .not()
    //     .isEmpty()
    //     .withMessage("Comapny name is required!")
    //     .exists()
    //     .isString()
    //     .withMessage("Comapny name should only contain alphabetic character!")
    //     .trim(),
    check("name")
        .not()
        .isEmpty()
        .withMessage("Name should not be blank!")
        .exists()
        .isString()
        .withMessage("Name should be a string value!")
        .isLength({ min: 3, max: 30 })
        .withMessage("Name should be between 3 to 30 characters long!")
        .trim(),
    check("gender")
        .not()
        .isEmpty()
        .withMessage("Gender is required!")
        .exists()
        .isString()
        .withMessage("Gender should be a string value!")
        .trim(),
    check("dateOfJoining")
        .not()
        .isEmpty()
        .withMessage("Date of joining is required!")
        .exists()
        .isDate()
        .withMessage("Date of joining should be a Date value!")
        .trim(),
    check("mobile")
        .not()
        .isEmpty()
        .withMessage("Mobile number is required!")
        .exists()
        .matches(/^[6-9]\d{9}$/)
        .withMessage("Please enter a valid mobile number!")
        .trim(),
    check("employeeCode")
        .not()
        .isEmpty()
        .withMessage("Employee code is required!")
        .trim(),
    check("email")
        .not()
        .isEmpty()
        .withMessage("Email is required!")
        .exists()
        .isEmail()
        .withMessage("Invalid email address entered!")
        .trim(),
    check("username")
        .not()
        .isEmpty()
        .withMessage("User name is required!")
        .exists()
        .isString()
        .withMessage("User name should be a string value!")
        .trim(),
    check("password")
        .not()
        .isEmpty()
        .withMessage("Password should not be blank!")
        .matches(/^(?=.*[0-9])/)
        .withMessage("Password should contain one numeric value from 0-9 !")
        .matches(/^(?=.*[a-z])/)
        .withMessage("Password should contain one lower case character!")
        .matches(/^(?=.*[A-Z])/)
        .withMessage("Password should contain one upper case charater!")
        .matches(/^(?=.*\W)/)
        .withMessage("Password should contain one special character!")
        .matches(/^.{8,20}/)
        .withMessage("Password should be between 8 to 20 characters long!")
        .trim(),
    check("designation")
        .not()
        .isEmpty()
        .withMessage("Designation is required!")
        .exists()
        .isString()
        .withMessage("Designation should be a string value!")
        .trim(),
    check("designationLevel")
        .not()
        .isEmpty()
        .withMessage("Designation level is required!")
        .exists()
        .isNumeric()
        .withMessage("Designation level should be a numeric value!")
        .trim(),
    function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({
                message: "Something went wrong",
                status: "fail",
                error: errors.array()
            });
        }
        next();
    }
]
module.exports = {registerValidation}