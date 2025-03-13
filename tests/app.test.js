const request = require('supertest');
const app = require('../src/index.js'); 

let server;

beforeAll(() => {
  server = app.listen(3000); 
});

afterAll((done) => {
  server.close(done); 
});

describe('GET /', () => {
  it('should return Hello World', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World');
  });
});
