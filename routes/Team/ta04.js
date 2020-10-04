//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();

const ta04Controller = require('../../controllers/Team/ta04');

router.get('/',ta04Controller.ta04);

module.exports = router;