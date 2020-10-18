const style = 0;
const counter =0;

exports.CreateCookie = (req, res, next) => {
    console.log('Cookie creation!');
};

exports.ta05 = (req, res, next) => {
    res.render('pages/Team/ta05', { 
        title: 'Team Activity 05', 
        path: '/ta05', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
};
exports.changeStyle = (req, res, next) => {
    req.session.style = req.body.css_style;
    res.redirect('/teamActivities/05');
}

exports.counter = (req, res, next) => {
    req.session.counter += Number(req.body.constant);
    res.redirect('/teamActivities/05');
}

exports.reset = (req, res, next) => {
    if (req.body.reset === 'true') {
        req.session.destroy(() => {
            res.redirect('/teamActivities/05'); 
        })
    } else {
        res.redirect('/teamActivities/05');
    }
}

exports.getIndex = (req, res, next) => {
    if (req.session.counter === undefined) {
        req.session.counter = 0;
    }
    if (!req.session.style === undefined) {
        req.session.counter = 0;
    }
    res.render('pages/teamActivities/ta05', { 
        title: 'Team Activity 05', 
        path: '/ta05',
        style: req.session.style,
        counter: req.session.counter
    });
};