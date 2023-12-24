const express = require('express');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config();
const cors = require('cors');
const contactRoute = require('./routes/contactRoutes');

connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/contacts', contactRoute);
app.use('/', (req, res) => {
  res.send('Welcome to the home page');
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
