const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('returns the hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Hello from SonarQube & Trivy challenge!' });
  });
});
