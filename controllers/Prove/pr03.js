const Product = require('../../models/project')

exports.pr03 = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('pages/Prove/pr03', {
            title: 'Prove 03',
            products: products,
            path: '/pr03', // For pug, EJS 
        });
    });        
};

exports.search = (req, res, next) => {
    const searchName = req.body.tag;
    Product.getItemsByTag(searchName, products => {
        res.render('pages/Prove/pr03', {
            title: 'Search Results',
            products: products,
            path: '/pr03/results', // For pug, EJS 
        });
    });
};