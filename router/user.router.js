const router = require('express').Router();
const { userController } = require('../controller');
const { userMiddleware } = require('../middleware');

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getSingleUser);

router.post('/',
    userMiddleware.isLoginExisted,
    userMiddleware.isEmailCreated,
    userMiddleware.isUserValid,
    userController.createUser);

router.delete('/:name', userController.deleteUserByName);

module.exports = router;
