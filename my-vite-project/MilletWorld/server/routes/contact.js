const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// Handle contact form submission
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newInquiry = new Inquiry({ name, email, message });
        await newInquiry.save();
        res.status(201).json({ message: 'Inquiry submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting inquiry', error });
    }
});

module.exports = router;