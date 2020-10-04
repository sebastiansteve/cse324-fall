const express = require('express');
const router = express.Router();

const pr01Controller = require('../../controllers/Prove/pr01');

router.get('/',pr01Controller.pr01Get);

router.post('/submit',pr01Controller.pr01Post);

module.exports = router;