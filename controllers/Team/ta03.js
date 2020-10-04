const Product = require('../../models/product')

exports.ta03 = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('pages/Team/ta03', {
            title: 'Team Activity 03',
            products: products,
            path: '/ta03', // For pug, EJS 
        });
    });        
};

exports.search = (req, res, next) => {
    const searchName = reg.body.searchName;
    Product.getItemsByTag(searchName, products => {
        res.render('pages/Team/ta03', {
            title: 'Search Results',
            products: products,
            path: '/ta03/results', // For pug, EJS 
        });
    });
};