const { where } = require('sequelize');
const request = require('supertest');
const { app } = require('../../app');
const { Users } = require('../users/user.model');

const testAuthLogin = {
	email: 'testing@gmail.com',
	password: '1234testing',
};

const testSignUp = {
	firstName: 'testing',
	lastName: 'testing',
	email: 'testing@gmail.com',
	password: '1234testing',
};

beforeAll(async () => {
	await Users.destroy({ truncate: true });
});

describe('[AUTH] This is the test of /api/v1/auth/login', () => {
	test('This must be return a 404', async () => {
		const response = await request(app)
			.post('/api/v1/auth/login')

			.send(testAuthLogin);

		expect(response.statusCode).toEqual(404);
	});

	test('this must be return a 201', async () => {
		const response = await request(app)
			.post('/api/v1/auth/sign-up')
			.send(testSignUp);

		expect(response.statusCode).toEqual(201);
		expect(response.body).toHaveProperty('data');
		expect(response.body).toHaveProperty('data.token');
		expect(response.body).toHaveProperty('data.user');
	});
});
