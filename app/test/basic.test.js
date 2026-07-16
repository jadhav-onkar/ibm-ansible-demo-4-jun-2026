import request from 'supertest';
import app from '../server.js';

describe('Simple CI/CD Demo App', () => {

  it('GET / returns a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.body.message).toBeDefined();
  });

  it('GET / returns status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('GET / does not return status 404', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).not.toBe(404);
  });

  it('GET /health returns DOWN status', async () => {
    const res = await request(app).get('/health');
    expect(res.body.status).toBe('DOWN');
  });

  it('GET /health returns status 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
  });

  it('GET /health does not return status 404', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).not.toBe(404);
  });

});
