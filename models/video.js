const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Video', videoSchema);


