const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0.01,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    video_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);


