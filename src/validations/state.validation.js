const {validationResult, check} = require('express-validator'); 

const stateValidation = [
    check('stateName')
    .not()
    .isEmpty()
    .withMessage("State should not be blank!")
    .exists()
    .isString()
    .withMessage("State should be a string value!")
    .isLength({ min: 3, max: 30 })
    .withMessage("State should be between 3 to 30 characters long!")
    .trim(),
    check('stateCode')
    .not()
    .isEmpty()
    .withMessage("State code should not be blank!")
    .exists()
    .isNumeric()
    .withMessage("State code should be a number value!")
    .isLength({ min: 1, max: 3 })
    .withMessage("State code should be between 1 to 3 numbers long!"),
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
module.exports = {stateValidation};