const bcrypt = require('bcrypt');

module.exports = {
    hash: (password) => bcrypt.hash(password, 11),
    compare: (password, hashPassword) => {
        const isPasswordEquels = bcrypt.compare(password, hashPassword);

        if (!isPasswordEquels) {
            throw new Error('Wrong email or password');
        }
    }
};
