require('dotenv').config();
const express = require('express');
const router = express.Router();
const Video = require('../models/video');
const Comment = require('../models/comment');
const Product = require('../models/product');

// GET /api/videos
router.get('/videos', async (req, res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
);

// GET /api/products
router.get('/products/:videoId', async (req, res) => {
    try {
        const products = await Product.find({ video_id: req.params.videoId });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
);

// GET /api/comments
router.get('/comments/:videoId', async (req, res) => {
    try {
        const comments = await Comment.find({ video_id: req.params.videoId });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
);

// POST /api/comments
router.post('/comments', async (req, res) => {
    const comment = new Comment({
        username: req.body.username,
        comment: req.body.comment,
        video_id: req.body.video_id
    });

    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
);


module.exports = router;
