const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Feedback = require('../models/Feedback');

// @route   POST api/feedback
// @desc    Submit feedback
// @access  Private
router.post('/', auth, async (req, res) => {
    try {
        const { rating, comments } = req.body;

        const newFeedback = new Feedback({
            user: req.user.id,
            rating,
            comments
        });

        const feedback = await newFeedback.save();
        res.json(feedback);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/feedback
// @desc    Get all feedback
// @access  Public
router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find().populate('user', ['name', 'email']).sort({ date: -1 });
        res.json(feedbacks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
