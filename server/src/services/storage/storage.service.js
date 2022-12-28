const AWS = require('aws-sdk'); //TODO

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

/* S3 STORAGE AMAZON */

AWS.config.update({
	accessKeyId: process.env.AK_S3AWS,
	secretAccessKey: process.env.SAK_S3AWS,
	region: 'us-east-1',
});

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

module.exports = { s3 };
