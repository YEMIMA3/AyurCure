const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
// routes/auth.js
router.post('/request-reset-password', authController.requestResetPassword);
router.post('/reset-password/:token', authController.resetPassword);


module.exports = router;