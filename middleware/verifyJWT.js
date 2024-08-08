const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  /* 
  #swagger.tags = ['Token']
  #swagger.description = 'Validate token'
  #swagger.summary = 'Validate token'
  #swagger.parameters['Token'] = {
      in: 'header',
      description: 'JWT token',
      required: true,
    }
    #swagger.responses[200] = {
        description: '',
    }
    #swagger.responses[408] = {
        description: 'Token not provided',
    }
*/

  const authHeader = req.headers['token'];
  if (!authHeader) {
    return res.status(408).send('Token not provided');
  }

  const token = authHeader;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(408).send('Request Timeoutoken');
    }
    req.user = decoded;
    next();
  });
};
module.exports = verifyJWT;
