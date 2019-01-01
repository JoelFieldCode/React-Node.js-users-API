// server.js
// @flow

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import userRoutes from './user_routes';

const app = express();

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
  origin: "http://localhost:3000",
  methods:['GET','POST'],
  credentials: true // enable set cookie
}));

app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});

userRoutes(app);
app.listen(port, () => {
  console.log('We are live on ' + port);
});
