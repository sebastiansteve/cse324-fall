const Product = require('../../models/product')

exports.ta03 = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('pages/Prove/pr03', {
            title: 'Prove 03',
            products: products,
            path: '/pr03', // For pug, EJS 
        });
    });        
};

exports.search = (req, res, next) => {
    const searchName = reg.body.searchName;
    Product.getItemsByTag(searchName, products => {
        res.render('pages/Prove/pr03', {
            title: 'Search Results',
            products: products,
            path: '/pr03/results', // For pug, EJS 
        });
    });
};