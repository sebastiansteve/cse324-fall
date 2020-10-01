//TA03 PLACEHOLDER
const express = require('express');
const https = require('https');
const router = express.Router();

var data = '';
var search_item = '';
var display_data = '';
let searched = false;
var item = '';

router.get('/', (req, res, next) => {
    https.get('https://byui-cse.github.io/cse341-course/lesson03/items.json', (response) => {
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            const myData = JSON.parse(data);
            item = myData;
            if (searched){
                display_data = search_item;
            }
            else {
                display_data = myData;
            }
            res.render('pages/ta03/ta03', {
                title: 'Team Activity 03',
                items: display_data,
                path: '/ta03', // For pug, EJS 
                activeTA03: true, // For HBS
                contentCSS: true, // For HBS
            });
        });
    });
});

router.get('/search', (req, res, next) => {
    const find_item = req.body.tag;
    for( var i=0; i<data.length; i++) {
        if (data[i].name == find_item){
            search_item += find_item;
        }
    }

    res.render('pages/ta03/ta03search', {
        title: 'Team Activity 03',
        items: find_item,
        path: '/ta03', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});
module.exports = router;