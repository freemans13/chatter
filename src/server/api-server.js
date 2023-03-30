import express from 'express';
import morgan from 'morgan';
import nocache from 'nocache';
import { authHandler, helmetHandler, corsHandler } from '../auth0/authentication.middleware';
import errorHandler from './middleware/error.middleware';
import notFoundHandler from './middleware/not-found.middleware';

const app = express();

app.set('json spaces', 2);

app.use(express.json());
app.use(morgan('dev'));
app.use(helmetHandler);
app.use(corsHandler);
app.use(nocache());

// seems to stop things like images from downloading
// app.use((req, res, next) => {
//   res.contentType('application/json; charset=utf-8');
//   next();
// });

app.get('/api/external', authHandler, (req, res) => {
  res.contentType('application/json; charset=utf-8');
  res.send({
    msg: 'Your access token was successfully validated!',
  });
});

app.get('/api/publictest', (req, res) => {
  res.contentType('application/json; charset=utf-8');
  res.send({
    msg: 'no login required. All good',
  });
});

app.get('/api/*', notFoundHandler);
app.use(errorHandler);

// eslint-disable-next-line import/prefer-default-export
export const handler = app;
