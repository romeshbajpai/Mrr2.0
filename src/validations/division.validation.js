const {validationResult, check} = require('express-validator'); 

const divisionValidation = [
    check('divisionName')
    .not()
    .isEmpty()
    .withMessage("Division should not be blank!")
    .exists()
    .isString()
    .withMessage("Division should be a string value!")
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
module.exports = {divisionValidation};