const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {

  const authHeader = req.headers.authorization;
  
  console.log('Auth Header:', authHeader); // Registro adicional
  if (!authHeader) {
    return res.status(408).send('Token not provided');
  }

  const token = authHeader;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Token:', decodedToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(408).send('Request Timeout. Invalid token.');
  }
};

module.exports = verifyJWT;
