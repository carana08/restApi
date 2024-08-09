const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {

  /* 
  #swagger.tags = ['Token']
  #swagger.description = 'Validate token'
  #swagger.summary = 'Validate token'
  #swagger.parameters['token'] = {
      in: 'header',
      description: 'JWT token',
      required: true,
    }
    #swagger.responses[200] = {
        description: 'Token is valid',
    }
    #swagger.responses[408] = {
        description: 'Token not provided or invalid',
    }
  */

  const authHeader = req.headers['token'];
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
