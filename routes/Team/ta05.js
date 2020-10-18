const express = require('express');
const router = express.Router();

const ta05Controller = require('../../controllers/Team/ta05');

router.get('/',ta05Controller.ta05);
router.post('/create-cookie', ta05Controller.CreateCookie);
router.get('/counter',ta05Controller.counter);
router.post('/changeStyle',ta05Controller.changeStyle);
router.get('/reset',ta05Controller.reset);

module.exports = router;