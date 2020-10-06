const fs = require('fs');
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor (title, imageUrl, description, price, tags){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.tags = tags;
    }

    static fetchAll(cb){
        getProductFromFile(cb);
    }

    static getItemsByTag(tag,cb){
        getProductFromFile(products => {
            const product = products.filter(prod => {
                for (let t of prod.tags) {
                    if (tag === t){
                        return true;
                    }
                }
            });
            console.log(product)
            cb(product);
        });
    }
};