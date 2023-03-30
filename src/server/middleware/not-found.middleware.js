// eslint-disable-next-line no-unused-vars
export default function notFoundHandler(request, response, next) {
  const message = 'Not Found';

  response.status(404).json({ message });
}
