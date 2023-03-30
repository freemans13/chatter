import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';

export default function AuthenticationGuard({ component }) {
  function redirect() {
    return <div>Loading...</div>;
  }
  const Component = withAuthenticationRequired(component, {
    onRedirecting: redirect,
  });

  return <Component />;
}
