const fs = require('fs');
const path = require('path');
const File = require('../models/File');
const config = require('../config');
const generateLink = require('../utils/generateLink');

const errorHtml = fs.readFileSync(path.join(__dirname, '..', 'views', 'error.html'), 'utf8');

exports.uploadFile = async (req, res) => {
    try {
        // Check if file was uploaded
        if (!req.files || !req.files.file) {
            //return res.status(400).json({ message: 'No file was uploaded' });
            return res.send(errorHtml.replace('{errorMessage}', 'No file was uploaded'))
        }

        const { file } = req.files;

        // Save file to uploads directory
        const uniqueFileName = file.name + '-' + Date.now();
        const filePath = path.join(config.uploadDir, uniqueFileName);
        await file.mv(filePath);


        // Save file data to database
        const newFile = new File({
            name: file.name,
            path: filePath,
            expirationTime: Date.now() + config.linkExpirationTime,
        });
        await newFile.save();

        // Generate download link
        const downloadLink = generateLink(newFile._id);

        // Read the HTML file with the download button and preview
        const html = fs.readFileSync(path.join(__dirname, '..', 'views', 'file.html'), 'utf8');


        // Replace the placeholders with actual values
        const outputHtml = html.replace('{filename}', newFile.name).replace('{downloadLink}', downloadLink);


        // Send the HTML file as response
        res.send(outputHtml);
    } catch (err) {
        console.error(`Error uploading file: ${err}`);
        //return res.status(500).json({ message: 'Internal server error' });

        return res.send(errorHtml.replace('{errorMessage}', 'Error Uploading file'));
    }
};
