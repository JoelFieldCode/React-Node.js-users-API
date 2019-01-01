// @flow
import fs from 'fs';

import usersFile from '../data.json';

export type User = {
  id: number,
  firstName: string,
  lastName: string
}

function getLastId (): number {
  const lastId = usersFile[usersFile.length - 1].id;
  return lastId;
}

export function getUsers () {
  return JSON.stringify(usersFile);
}

export function addUser (newUser: User, callback: Function) {
  const lastId: number = getLastId();
  usersFile.push({
      ...newUser,
      id: lastId + 1
  });

  fs.writeFile('./data.json', JSON.stringify(usersFile, null, 2), function (err) {
      if (err) return console.log(err);
      callback();
  });
}