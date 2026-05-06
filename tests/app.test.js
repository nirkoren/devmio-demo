const request = require('supertest');
const app = require('../app');

test('GET /', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
});

test('GET /health', async () => {
  const res = await request(app).get('/health');
  expect(res.body.status).toBe('UP');
});
