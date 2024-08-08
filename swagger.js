const swaggerAutogen = require('swagger-autogen')()

 const doc = {
   "info": {
     "title": 'REST API',
     "description": 'REST API with Express and Firestore'
   },
   //"host": 'localhost:5500',
   "host": "restapi-o8ud.onrender.com",
   "basePath": "/api",
   "schemes": ['https'],
  "consumes": ['application/json'],
  "produces": ['application/json']
 };

 const outputFile = './swagger_output.json'
 const endpointsFiles = ['./routes/*.js']

 swaggerAutogen(outputFile, endpointsFiles, doc)