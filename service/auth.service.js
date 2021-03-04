const { User } = require('../dataBase/models');

module.exports = {
    findUser: async (email) => {
        await User.findOne({ email });
    }
};
