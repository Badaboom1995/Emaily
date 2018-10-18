const express = require('express');
const router = express.Router();


const auth_controller = require('../controllers/auth.controller');

router.get('/google', auth_controller.auth_google);

module.exports = router;


