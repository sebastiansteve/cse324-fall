const express = require('express');
const fs = require('fs'); // File system for TA01
const router = express.Router();
// Remember Team Activity 01? 
// This is the same solution, but implemented in our app using 
// proper routing for the view engine
const ta01Controller = require('../../controllers/Team/ta01');


router.get('/', ta01Controller.ta01);

// CORE CHALLENGE 2 -
router.get('/activities', ta01Controller.activities);

// CORE CHALLENGE 3 -
router.post('/add-activity', ta01Controller.addActivity);

/***************************************************************************
* STRETCH CHALLENGE SOLUTIONS
* These are the solutions for the stretch challenges.
***************************************************************************/
// STRETCH CHALLENGE 1 - Add CSS.
router.get("/stretch-1", ta01Controller.strech01);

// STRETCH CHALLENGE 2 - Write to file.
router.get("/stretch-2", ta01Controller.strech02Get);
// The url can be identical.
router.post("/stretch-2", ta01Controller.strech02Post);

// STRETCH CHALLENGE 3 - Add two numbers...
router.get("/stretch-3", ta01Controller.strech03Get);

router.post("/stretch-3", ta01Controller.strech03Post);
module.exports = router;