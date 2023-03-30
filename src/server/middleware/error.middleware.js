import { InvalidTokenError, UnauthorizedError } from 'express-oauth2-jwt-bearer';

export default function errorHandler(error, request, response, next) {
  if (response.headersSent) {
    return next(error);
  }

  if (error instanceof InvalidTokenError) {
    const message = 'Bad credentials';

    response.status(error.status).json({ message });

    return next(error);
  }

  if (error instanceof UnauthorizedError) {
    const message = 'Requires authentication';

    response.status(error.status).json({ message });

    return next(error);
  }

  const status = 500;
  const message = 'Internal Server Error';

  response.status(status).json({ message });
  return next(error);
}
