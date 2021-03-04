const { User } = require('../dataBase/models');
const { passwordsHasher } = require('../helper');

module.exports = {
    isEmailValid: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                throw new Error('NO FOUND');
            }

            passwordsHasher.compare(password, user.password);

            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};
