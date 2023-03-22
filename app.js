const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const routes = require('./routes');
const config = require('./config');
const deleteExpiredFiles = require('./controllers/expiredHelper');


const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Add middleware to set the Authorization header
app.use((req, res, next) => {
  req.headers.authorization = `Bearer ${config.authToken}`;
  next();
});

// Connect to MongoDB database
mongoose.connect(config.dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`Database connection error: ${err}`);
});

db.once('open', () => {
  console.log('Connected to database');
});

// Set up routes
app.use('/', routes);

setInterval(deleteExpiredFiles, 1 * 60 * 1000);

// Start server
app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});

