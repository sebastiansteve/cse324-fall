//TA03 PLACEHOLDER
const express = require('express');

const pr03Controller = require('../../controllers/Prove/pr03');

const router = express.Router();

router.get('/', pr03Controller.pr03);

router.post('/search', pr03Controller.search);

module.exports = router;