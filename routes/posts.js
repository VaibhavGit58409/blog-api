const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router.post('/', async (req, res) => {
  const post = new Post(req.body);
  try {
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('author');
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;