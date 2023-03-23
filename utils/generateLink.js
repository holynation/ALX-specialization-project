const crypto = require('crypto');
const config = require('../config');

module.exports = (fileId) => {
    // Generate token
    const token = crypto.randomBytes(32).toString('hex');

    // Save token to database
    // ...

    // Generate link
    const link = `${config.baseUrl}/${fileId}?token=${token}`;

    return link;
};
