const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    video_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Comment', commentSchema);