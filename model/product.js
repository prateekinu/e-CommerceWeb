const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        range: [1, 5],
        required: true
    },
    discount:{
        type: Number,
        range: [0, 100],
        required: true
    },
    avaibility:{
        type: String,
    },
    company:{
        type: String,
        enum: ["AMZ","FLP","SNP","MYN","AZO"]
    },
    category:{
        type: String,
        enum: ['Phone',"Computer","TV","Earphone","Tablet","Charger","Mouse","Keypad","Pendrive","Remote","Speaker","Headset","Laptop","PC"],
        required: true
    },
});

module.exports = mongoose.model('product',productSchema);