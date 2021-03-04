const { authService } = require('../service');
const { passwordsHasher } = require('../helper');
const { errorMessages: { USER_NOT_FOUND, ENTERED } } = require('../error');

module.exports = {
    isEmailValid: (req, res) => {
        try {
            const { email, password } = req.body;

            const user = authService.findUser(email);

            if (!user) {
                throw new Error(USER_NOT_FOUND);
            }

            passwordsHasher.compare(password, user.password);

            res.json(ENTERED);
        } catch (e) {
            res.json(e.message);
        }
    }
};
