// server.js
// @flow

import mongoose from 'mongoose';
import dotenv from 'dotenv';

import app from './app';

dotenv.config();
const port = process.env.PORT;
const DBURL = process.env.DBURL;

mongoose.connect(DBURL, () => {
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});
