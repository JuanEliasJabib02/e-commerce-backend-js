const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

const db = new Sequelize({
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  database:
		process.env.NODE_ENV === 'test'
		  ? process.env.POSTGRES_DB_TEST
		  : process.env.POSTGRES_DB,
  logging: false,
  dialectOptions:
		process.env.NODE_ENV === 'production'
		  ? {
		      ssl: {
		        required: true,
		        rejectUnauthorized: false
		      }
			  }
		  : {}
})

const postgresConnect = () => {
  db.authenticate()
    .then(() => console.log('DB AUTH'))
    .catch(err => console.log(err))

  db.sync()
    .then(() => console.log('DB SYNCH'))
    .catch(err => console.log(err))
}

module.exports = { postgresConnect, db }
