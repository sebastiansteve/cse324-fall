const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/pr01/form', { 
        title: 'Prove Activity 01', 
        path: '/pr01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/submit',(req, res, next) => {
    res.render('pages/pr01/pr01', { 
        title: 'Prove Activity 01', 
        path: '/pr01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        input1: req.body.i1,
        input2: req.body.i2,
    });
});

module.exports = router;