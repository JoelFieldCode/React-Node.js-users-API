// @flow
import { getUsers, addUser, updateUser, deleteUser } from '../users';
import User from '../../models/User';

User.find = jest.fn();
User.create = jest.fn();
User.updateOne = jest.fn();
User.deleteOne = jest.fn();

const testUser = {
  firstName: 'Gavin',
  lastName: 'Belson'
};

test('gets users', () => {
  getUsers();
  expect(User.find).toHaveBeenCalledWith({});
});

test('creates user', () => {
  addUser(testUser);
  expect(User.create).toHaveBeenCalledWith(testUser);
});

test('updates user', () => {
  updateUser(3, testUser);
  expect(User.updateOne).toHaveBeenCalledWith({
    _id: 3,
  },testUser);
});

test('deletes user', () => {
  deleteUser(3);
  expect(User.deleteOne).toHaveBeenCalledWith({ _id: 3});
});