// @flow
import request from 'supertest';

import app from '../../app';
import { testUsers } from '../../utils/user_mocks';

jest.mock('../../repositories/users', () => {
  const testUsers = require('../../utils/user_mocks').testUsers;
  return {
    getUsers: async () => {
      return testUsers;
    }
  }
});

test('should pass integration tests', (done) => {
  request(app)
    .get('/users')
    .expect(200, testUsers)
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});