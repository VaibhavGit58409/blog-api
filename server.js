const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');

const app = express();

mongoose.connect('mongodb://localhost:27017/blog-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/posts', postRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
