import request from 'supertest';
import express, {Application} from 'express';
import jwt from 'jsonwebtoken';
import GreenAuthServer from '../src/index';

describe('Verify that the `auth/me` path responds correctly', () => {
  let app: Application;
  const token = `Bearer ${jwt.sign({uid: 1}, 'secret')}`;

  beforeAll(() => {
    app = express();
    const greenAuthServer = new GreenAuthServer({secret: 'secret'});
    app.use(greenAuthServer.initialize());
  });

  test('It should return a status 401', (done) => {
    request(app)
        .get('/auth/me')
        .then((response: any) => {
          expect(response.statusCode).toBe(401);
          done();
        });
  });
  test('It should return a status 401 with invalid token', (done) => {
    request(app)
        .get('/auth/me')
        .set('Authorization', 'token')
        .then((response: any) => {
          expect(response.statusCode).toBe(401);
          done();
        });
  });
  test('It should return a status 200', (done) => {
    request(app)
        .get('/auth/me')
        .set('Authorization', token)
        .then((response: any) => {
          expect(response.statusCode).toBe(200);
          done();
        });
  });
});
