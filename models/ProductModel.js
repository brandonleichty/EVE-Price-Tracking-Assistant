const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    url: {
        type: String
    },
    company: {
        type: String
    },
    title: {
        type: String
    },
    price: {
        type: String
    },
    tel: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    image: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Product', ProductSchema);

/*
    req.body when a new tracking request is submitted

    { url: 'https://topodesigns.com/collections/new-apparel/products/work-shirt-plaid-flannel',
    tel: '9524561332',
    email: 'on',
    address: 'leichtyou@outlook.com',
    lookup: 'topodesigns',
    title: 'Work Shirt',
    price: '$89.00',
    image: 'https://cdn.shopify.com/s/files/1/0277/0693/products/work_shirt_7_medium.jpg?v=1521747285',
    company: 'Topo Designs' }
*/