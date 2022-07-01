const swaggerAutogen = require('swagger-autogen')()

const outputFile ='./swagger_output.json'
const endpointsFile = ['./app.js']

swaggerAutogen(outputFile,endpointsFile)