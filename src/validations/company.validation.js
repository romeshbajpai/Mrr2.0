const { validationResult, check } = require("express-validator");

 const companyValidation = [
    // check("companyName")
    //     .not()
    //     .isEmpty()
    //     .withMessage("Comapny name should not be blank!")
    //     .exists()
    //     .isString()
    //     .withMessage("Comapny name should only contain alphabetic character!")
    //     .trim(),
    check("maxUser")
        .not()
        .isEmpty()
        .withMessage("Max user should not be blank!")
        .exists()
        .isNumeric()
        .withMessage("Max user should be a number!")
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
module.exports = {companyValidation}