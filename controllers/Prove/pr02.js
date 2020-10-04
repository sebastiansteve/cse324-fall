const bookArray = [];
const summaryArray = [];

exports.pr02 = (req, res, next) => {
    res.render('pages/Prove/pr02', {
        title: 'Book Summary',
        path: '/pr02', // For pug, EJS
        titles: bookArray,
        summaries: summaryArray,
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
};

exports.bookGet = (req, res, next) => {
    const newTitle = req.query.newTitle;
    const newSummary = req.query.newSummary;

    bookArray.push(newTitle);
    summaryArray.push(newSummary);

    res.render('pages/Prove/pr02', {
        title: 'Week Prove 2',
        titles: bookArray,
        summaries: summaryArray,
        path: '/pr02', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
};

exports.bookPost = (req, res, next) => {
    const newTitle = req.body.newTitle;
    const newSummary = req.body.newSummary;


    bookArray.push(newTitle);
    summaryArray.push(newSummary);

    res.redirect('/pr02/');
};