// @flow
import request from 'supertest';

import app from '../../app';
import { testUsers, mockUserSubmit } from '../../utils/user_mocks';

import * as userRepo from '../../repositories/users';

const createdUser = {
  ...mockUserSubmit,
  id: 4
}

userRepo.getUsers = async () => {
  return testUsers;
}

userRepo.addUser = jest.fn();
userRepo.addUser.mockReturnValue(createdUser);

userRepo.updateUser = jest.fn();
userRepo.updateUser.mockReturnValue(true);

userRepo.deleteUser = jest.fn();
userRepo.deleteUser.mockReturnValue(true);

test('should get users', (done) => {
  request(app)
    .get('/users')
    .expect(200, testUsers)
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});

test('should create user', (done) => {
  request(app)
    .post('/user')
    .send(mockUserSubmit)
    .expect(200, createdUser)
    .end((err) => {
      expect(userRepo.addUser).toHaveBeenCalledWith(mockUserSubmit);
      if (err) throw done(err);
      done();
    });
});

test('should update user', (done) => {
  request(app)
    .put('/user/4')
    .set('Accept', 'application/json')
    .send(mockUserSubmit)
    .expect(200)
    .end((err) => {
      expect(userRepo.updateUser).toHaveBeenCalledWith('4', mockUserSubmit);
      if (err) throw done(err);
      done();
    });
});

test('should delete user', (done) => {
  request(app)
    .delete('/user/4')
    .set('Accept', 'application/json')
    .expect(200)
    .end((err) => {
      expect(userRepo.deleteUser).toHaveBeenCalledWith('4');
      if (err) throw done(err);
      done();
    });
});