import express from 'express';
import morgan from 'morgan';
import nocache from 'nocache';
import bodyParser from 'body-parser';
import { authHandler, helmetHandler, corsHandler } from '../auth0/authentication.middleware';
import errorHandler from './middleware/error.middleware';
import notFoundHandler from './middleware/not-found.middleware';
import users from './routes/users';
import authUserRefRouter from '../auth0/authUserRefRouter';

const app = express();

app.set('json spaces', 2);

app.use(express.json());
app.use(morgan('dev'));
app.use(helmetHandler);
app.use(corsHandler);
app.use(nocache());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use('/api/users', authHandler, users);
app.use('/api/userRef', authHandler, authUserRefRouter);

// seems to stop things like images from downloading
// app.use((req, res, next) => {
//   res.contentType('application/json; charset=utf-8');
//   next();
// });

// app.post('/api/userRef', authHandler, (req, res) => {
//   if (!req.body.user['chatter.team-freeman.com:is_new']) {
//     res.status(200);
//     res.contentType('application/json; charset=utf-8');
//     res.send({
//       msg: 'already registered',
//     });
//     return;
//   }

//   res.status(201);
//   res.contentType('application/json; charset=utf-8');
//   res.send({
//     msg: 'registered',
//   });
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
