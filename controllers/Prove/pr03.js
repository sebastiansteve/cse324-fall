exports.pr03 = (req, res, next) => {
    res.render('pages/Prove/pr03', { 
        title: 'Prove 03', 
        path: '/pr03', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
};