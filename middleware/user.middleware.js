const { errorCodes } = require('../constant');
const { userValidators } = require('../validators');

module.exports = {
    isUserValid: (req, res, next) => {
        try {
            const { error } = userValidators.createUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};