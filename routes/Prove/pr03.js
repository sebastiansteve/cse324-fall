//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();

const ta03Controller = require('../../controllers/Prove/pr03');

router.get('/',ta03Controller.pr03);

module.exports = router;