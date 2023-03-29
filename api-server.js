import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { expressjwt } from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import authConfig from './src/auth_config.json';

const app = express();

// const port = process.env.API_PORT || 3001;
// const appPort = process.env.SERVER_PORT || 3000;
const appOrigin = authConfig.appOrigin || `http://localhost:5173`;

// if (!authConfig.domain || !authConfig.audience || authConfig.audience === 'YOUR_API_IDENTIFIER') {
//   console.log('Exiting: Please make sure that auth_config.json is in place and populated with valid domain and audience values');

//   process.exit();
// }

app.use(morgan('dev'));

// https://stackoverflow.com/questions/65890616/helmet-causing-mern-app-hosted-on-heroku-cause-error-refused-to-execute-inline
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        'script-src': ["'self'", "'unsafe-inline'", 'https://*.auth0.com'],
        'connect-src': ["'self'", "'unsafe-inline'", 'https://*.auth0.com'],
      },
    },
  })
);

app.use(cors({ origin: appOrigin }));

const checkJwt = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ['RS256'],
});

app.get('/api/external', checkJwt, (req, res) => {
  res.send({
    msg: 'Your access token was successfully validated!',
  });
});

// app.listen(port, () => console.log(`API Server listening on port ${port}`));

// eslint-disable-next-line import/prefer-default-export
export const handler = app;
