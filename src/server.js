// server.js
// @flow

import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/user_routes';

dotenv.config();
const app = express();
const port = process.env.PORT;
const DBURL = process.env.DBURL;

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
