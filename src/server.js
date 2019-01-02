// server.js
// @flow

import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

import { DBURL } from '../secrets';
import userRoutes from './routes/user_routes';

const app = express();
const port = 8000;

mongoose.connect(DBURL, () => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(function(req, res, next) {
      res.setHeader("Content-Type", "application/json");
      next();
  });
  userRoutes(app);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});
