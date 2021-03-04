const { userService } = require('../service');
const { errorCodes } = require('../constant');
const { errorMessages } = require('../error');
const { passwordsHasher } = require('../helper');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const allUsers = await userService.findUsers();

            res.json(allUsers);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json.message(e);
        }
    },

    getSingleUser: async (req, res) => {
        try {
            const userId = req.params.id;

            const user = await userService.findUserById(userId);

            res.json(user);
        } catch (e) {
            res.json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const { password } = req.body;

            const hashPassword = await passwordsHasher.hash(password);

            await userService.createUser({ ...req.body, password: hashPassword });

            res.status(201).json(errorMessages.USER_IS_CREATED);
        } catch (e) {
            res.json(e);
        }
    },

    deleteUserByName: async (req, res) => {
        try {
            const { name } = req.params.name;

            await userService.deleteUserByName(name);

            res.json(errorMessages.USER_WAS_DELETED);
        } catch (e) {
            res.json(e.message);
        }
    }
};
