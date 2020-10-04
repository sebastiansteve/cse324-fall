const userArray = ['Jack', 'Jill', 'Brian'];

exports.ta02 = (req, res, next) => {
    res.render('pages/Team/TA02/ta02', {
        title: 'Team Activity 02',
        users: userArray,
        path: '/ta02', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
};

exports.addUser = (req, res, next) => {
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
        res.render('pages/Team/TA02/ta02error', {
            title: 'Team Activity 02',
            err: 'User already exists',
            path: '/ta02', // For pug, EJS
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
        });
    }

    userArray.push(newUser);

    res.redirect('/ta02/');
};

exports.removeUser = (req, res, next) => {
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
        res.render('pages/Team/TA02/ta02error', {
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
};