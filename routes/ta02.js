const express = require('express');
const router = express.Router();

// For requirement 01 of TA02
const userArray = ['Jack', 'Jill', 'Brian'];

// For requirement 02 of TA02
router.post('/addUser', (req, res, next) => {
    const newUser = req.body.newUser;
    exist = false;
    for (var i in userArray){
        if (exist == false){
            if (newUser == userArray[i]){
                exist = true;
            }
        }
    }
    if (exist == true){
        res.render('pages/ta02error', {
            title: 'Team Activity 02',
            err: 'User already exists',
            path: '/ta02', // For pug, EJS
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
        });
    }

    userArray.push(newUser);

    res.redirect('/ta02/');
});

// For requirement 03 of TA02
router.post('/removeUser', (req, res, next) => {
    const remUser = req.body.remUser;
    exist = false;
    // Splice method removes from a const array
    const index = userArray.indexOf(remUser);
    for (var i in userArray){
        if (exist == false){
            if (remUser == userArray[i]){
                exist = true;
            }
        }
    }
    if (exist == false){
        res.render('pages/ta02error', {
            title: 'Team Activity 02',
            err: 'User not found',
            path: '/ta02', // For pug, EJS
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
        });
    }
    if (index !== -1 ) {
        userArray.splice(index, 1);
    }

    res.redirect('/ta02/');
});

router.get('/',(req, res, next) => {
    res.render('pages/ta02', {
        title: 'Team Activity 02',
        users: userArray,
        path: '/ta02', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;