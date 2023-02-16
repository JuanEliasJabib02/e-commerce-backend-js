const swaggerJsDoc = require('swagger-jsdoc')
const path = require('path')

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Hideshi API Documentation',
    version: '1.0.1'
  },
  servers: [
    {
      url: 'http://localhost:4000/api/v1',
      description: ''
    }
  ],
  components: {
    securitySchemes: {
      JWT: {
        type: 'http',
        scheme: 'bearer'
      }
    },
    schemas: {
      authLogin: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      },
      authSignUp: {
        type: 'object',
        required: ['firstName', 'lastName', 'email', 'password'],
        properties: {
          firstName: {
            type: 'string'
          },
          lastName: {
            type: 'string'
          },
          email: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      },
      addCategory: {
        type: 'object',
        required: ['name'],
        properties: {
          name: {
            type: 'string'
          },
        }
      }, 
      addProduct: {
        /* name, details, categoryId, price, quantity  */
        type: "object",
        required: ["name","details, categoryId, price, quantity","productImg"],
        properties: {
          name:{
            type:"string"
          },
          details:{
            type:"string"
          },
          categoryId: {
            type:"integer"
          },
          price: {
            type:"integer"
          },
          quantity: {
            type:"integer"
          },
          productImg: {
            type: "file",
            
          }
        }
      }
    }
  }
}

const options = {
  swaggerDefinition,
  apis:[
    `${path.join(__dirname, "../domains/auth/auth.routes.js")}`,
    `${path.join(__dirname, "../domains/categories/category.routes.js")}`,
    `${path.join(__dirname, "../domains/products/product.routes.js")}`,
] 
};

const openApiConfig = swaggerJsDoc(options)

module.exports = { openApiConfig }