const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: String,
    path: String,
    expirationTime: Date,
    downloadCount: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model('File', fileSchema);
