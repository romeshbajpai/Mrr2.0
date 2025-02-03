const {validationResult, check} = require('express-validator'); 

const districtValidation = [
    check('districtName')
    .not()
    .isEmpty()
    .withMessage("District should not be blank!")
    .exists()
    .isString()
    .withMessage("District should be a string value!")
    .isLength({ min: 3, max: 30 })
    .withMessage("District should be between 3 to 30 characters long!")
    .trim(),
    check('districtCode')
    .not()
    .isEmpty()
    .withMessage("District code should not be blank!")
    .exists()
    .isString()
    .withMessage("District code should be a number value!")
    .isLength({ min: 3, max: 10 })
    .withMessage("District code should be between 3 to 10 numbers long!"),
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
module.exports = {districtValidation};