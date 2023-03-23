const config = require('../config')
module.exports = (req, res, next) => {
    // Check if authorization header is present
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header is missing' });
    }

    // Check if authorization header is in the correct format
    const authHeaderParts = authHeader.split(' ');
    if (authHeaderParts.length !== 2 || authHeaderParts[0] !== 'Bearer') {
        return res.status(401).json({ message: 'Authorization header is in the wrong format' });
    }

    // Check if token is valid
    const token = authHeaderParts[1];
    if (token !== config.authToken) {
        return res.status(401).json({ message: 'Invalid authorization token' });
    }

    // User is authorized
    next();
};