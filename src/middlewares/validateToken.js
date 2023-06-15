const { verifyToken } = require('../utils/JWT');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const objToken = verifyToken(authorization);
    req.user = objToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateToken };