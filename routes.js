const express = require('express');
const uploadController = require('./controllers/uploadController');
const downloadController = require('./controllers/downloadController');
const authMiddleware = require('./middlewares/auth');
const router = express.Router();
const AppController = require('./controllers/appController');


router.get('/', AppController.getUploadPage);

// Route for uploading a file
router.post('/upload', uploadController.uploadFile);

// Route for downloading a file
router.get('/:id', authMiddleware, downloadController.downloadFile);


module.exports = router;
