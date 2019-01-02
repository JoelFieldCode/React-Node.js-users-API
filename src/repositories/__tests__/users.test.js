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