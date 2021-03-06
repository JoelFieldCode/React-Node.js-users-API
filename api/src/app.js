// @flow

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import userRoutes from './routes/user_routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});
app.use(cors());
userRoutes(app);

export default app;