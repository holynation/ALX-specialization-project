const fs = require('fs');
const path = require('path');
const File = require('../models/File');
const config = require('../config');

exports.downloadFile = async (req, res) => {
    try {
        const { id } = req.params;

        // Find file by ID
        const file = await File.findById(id);

        // Check if file exists
        if (!file) {
            return res.status(404).json({ message: 'File not found' });
        }
        // Check if file has expired
        if (file.expirationTime < Date.now()) {
            // Delete file from disk
            fs.unlinkSync(file.path);

            // Delete file from database
            await file.delete();

            return res.status(404).json({ message: 'File not found' });
        }

        // Increment download count
        file.downloadCount++;
        await file.save();

        // Set authorization header
        res.set('Authorization', `Bearer ${config.authToken}`);

        // Send file as attachment
        return res.download(file.path, file.name);
    } catch (err) {
        console.error(`Error downloading file: ${err}`);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
