//TA03 PLACEHOLDER
const express = require('express');

const ta03Controller = require('../../controllers/Team/ta03');

const router = express.Router();

router.get('/', ta03Controller.ta03);

router.post('/search', ta03Controller.search);

module.exports = router;