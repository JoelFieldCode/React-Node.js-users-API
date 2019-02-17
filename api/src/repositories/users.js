// @flow
import User, { UserData } from '../models/User';

export async function getUsers () {
  return await User.find({});
}

export async function addUser (newUser: UserData) {
  return await User.create(newUser);
}

export async function updateUser (userId: string, userData: UserData) {
  return await User.updateOne({
    _id: userId
  }, userData);
}

export async function deleteUser (userId: string) {
  return await User.deleteOne({ _id: userId });
}