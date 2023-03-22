const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const File = require('../models/File');
const config = require('../config');

const deleteExpiredFiles = async () => {
    try {
        // Connect to database
        await mongoose.connect(config.dbUrl);

        // Find all expired files
        const expiredFiles = await File.find({
            expirationTime: { $lt: Date.now() },
        });

        // Delete expired files from the database and file system
        await Promise.all(
            expiredFiles.map(async (file) => {
                await File.deleteOne({ _id: file._id });
                fs.unlinkSync(file.path);
            })
        );

        // Disconnect from database
        await mongoose.disconnect();

        console.log(`${expiredFiles.length} expired files deleted`);
    } catch (err) {
        console.error(`Error deleting expired files: ${err}`);
    }
};

module.exports = deleteExpiredFiles;
//setInterval(deleteExpiredFiles, 1 * 60 * 1000);