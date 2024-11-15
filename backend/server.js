const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const todoRoutes = require('./routes/todoRoutes');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error: ', err));

app.use(cors());
app.use(bodyParser.json());
app.use('/api', todoRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});