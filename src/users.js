// @flow
import User, { UserData } from './models/User';
import mongoose from 'mongoose';

export async function getUsers () {
  return await User.find({});
}

export async function addUser (newUser: UserData) {
  return await User.create(newUser);
}