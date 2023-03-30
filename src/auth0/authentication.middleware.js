import { auth } from 'express-oauth2-jwt-bearer';
import helmet from 'helmet';
import cors from 'cors';
import authConfig from './auth-config.json';

const authHandler = auth({
  issuerBaseURL: `https://${authConfig.domain}`,
  audience: authConfig.audience,
});

// https://stackoverflow.com/questions/65890616/helmet-causing-mern-app-hosted-on-heroku-cause-error-refused-to-execute-inline
const helmetHandler = helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      'script-src': ["'self'", "'unsafe-inline'", 'https://*.auth0.com'],
      'connect-src': ["'self'", "'unsafe-inline'", 'https://*.auth0.com'],
    },
  },
});
// https://github.com/auth0-developer-hub/api_express_javascript_hello-world/blob/basic-authorization/src/index.js
// app.use(
//   helmet({
//     hsts: {
//       maxAge: 31536000,
//     },
//     contentSecurityPolicy: {
//       useDefaults: false,
//       directives: {
//         'default-src': ["'none'"],
//         'frame-ancestors': ["'none'"],
//       },
//     },
//     frameguard: {
//       action: 'deny',
//     },
//   })
// );

const corsHandler = cors({
  origin: authConfig.appOrigin,
  methods: ['GET'],
  allowedHeaders: ['Authorization', 'Content-Type'],
  maxAge: 86400,
});
export { authHandler, helmetHandler, corsHandler };
