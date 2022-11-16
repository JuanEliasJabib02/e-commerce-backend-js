const { app } = require('./app');
const { postgresConnect } = require('./config/postgres');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const startServer = () => {
	app.listen(PORT, () => {
		console.log('SERVER ON');
	});
	//Connect DB
	postgresConnect();
};

if (NODE_ENV !== 'test') {
	startServer();
}
