const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
            /* 
  #swagger.tags = ['Token']
  #swagger.description = 'Validate token'
  #swagger.summary = 'Validate token'
  #swagger.parameters['Token'] = {
      in: 'header',
      description: 'JWT token',
      required: true,
    }
*/


    if (!token) {
        return res.status(408).json({ message: 'Token not provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

        if (err) {
            return res.status(408).json({ message: 'Invalid token' });
        }

        req.user = decoded;
        next();
    });
};

module.exports = verifyJWT;