const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const mongoURI = 'mongodb+srv://rajmahchawal:rajmachawal@cluster0.t1lyuje.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI);
mongoose.connection.on('error', (error) => console.error('MongoDB connection error:', error));

app.use(bodyParser.json());

const indexRoute = require('./routes/index');
app.use('/', indexRoute);

const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');

app.use('/api/posts', postRoutes);
app.use('/api/posts', commentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});