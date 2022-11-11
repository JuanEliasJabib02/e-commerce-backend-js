const swaggerJsDoc = require("swagger-jsdoc");


const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Hideshi API Documentation",
    version: "1.0.1"
  },
  servers: [
    {
      url:"http://localhost:4000/api/v1"
    }
  ],
  components: {
    schemas: {
      authLogin: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: {
            type:"string"
          },
          password: {
            type:"string"
          }
        }
      },
      authSignUp: {
        type: "object",
        required: ["firstName","lastName","email","password"],
        properties: {
          firstName: {
            type: "string"
          },
          lastName: {
            type: "string"
          },
          email: {
            type: "string"
          },
          password: {
            type:"string"
          }
        }
      }
    }
  }
};


const options = {
  swaggerDefinition,
  apis: [
    "./routes/*.js"
  ]
};

const openApiConfig = swaggerJsDoc(options);


module.exports = { openApiConfig };