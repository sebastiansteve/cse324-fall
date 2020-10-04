const express = require('express');
const router = express.Router();

const ta02Controller = require('../../controllers/Team/ta02');
// For requirement 01 of TA02


// For requirement 02 of TA02
router.post('/addUser', ta02Controller.addUser);

// For requirement 03 of TA02
router.post('/removeUser', ta02Controller.removeUser);

router.get('/',ta02Controller.ta02);

module.exports = router;