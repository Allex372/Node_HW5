const router = require('express').Router();

const { authMiddleware } = require('../middleware');

router.post('/', authMiddleware.isEmailValid);

module.exports = router;
