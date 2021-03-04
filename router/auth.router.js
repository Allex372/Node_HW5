const router = require('express').Router();

const { authMiddleware } = require('../middleware');

const { authController } = require('../controller');

router.post('/',
    authMiddleware.isLoginExisted,
    authMiddleware.isEmailCreated,
    authMiddleware.isUserValid,
    authController.isEmailValid);

module.exports = router;
