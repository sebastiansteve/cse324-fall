const express = require('express');
const router = express.Router();

const pr02Controller = require('../../controllers/Prove/pr02');

router.get('/',pr02Controller.pr02);

router.post('/book', pr02Controller.bookPost); 

router.get('/book', pr02Controller.bookGet); 

module.exports = router;