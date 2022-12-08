const supertest = require('supertest');

const createApp = require('./Server');

const app = createApp();

const request = supertest(app);

test('POST /login', async () => {
	const res = await request.post('/register')
  .expect(200)
  .expect('Content-Type', 'application/json');
	expect(res.body).toEqual('http://localhost:3000');
});
