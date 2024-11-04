const express = require('express');
const User = require('../…………………);
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
      ………………………………
      ………………………..
      ………………………….
    res.json({ message: 'Signup successful' });
});

// Login route
router.post('/login', async (req, res) => {
               …………………………………….
               ………………..……………………………………………………..


    if (user) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(……………………….).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
