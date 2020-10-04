exports.pr01Get = (req, res, next) => {
    res.render('pages/Prove/pr01/form', { 
        title: 'Prove Activity 01', 
        path: '/pr01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
};

exports.pr01Post =(req, res, next) => {
    res.render('pages/Prove/pr01/pr01', { 
        title: 'Prove Activity 01', 
        path: '/pr01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        input1: req.body.i1,
        input2: req.body.i2,
    });
};