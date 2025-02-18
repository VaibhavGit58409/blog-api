r/usjs
const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(400).send('Invalid credentials');
  }
  res.status(200).send('Login successful');
});

module.exports = router;