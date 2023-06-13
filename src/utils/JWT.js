const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const tokenGenerate = (payload) => jwt.sign(payload, jwtSecret);

const verifyToken = (token) => jwt.verify(token, jwtSecret).JsonWebTokenError;

module.exports = { tokenGenerate, verifyToken };