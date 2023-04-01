import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import config from './auth-config.json';

export default function AuthenticationProviderWithNavigate({ children }) {
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(config.domain && config.clientId && config.redirectUri)) {
    // eslint-disable-next-line no-console
    console.error('Missing/Incomplete auth0 config', { config });
    return null;
  }

  return (
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      authorizationParams={{
        redirect_uri: config.redirectUri,
        audience: config.audience,
        scope: 'openid profile email user_metadata read:current_user_metadata update:current_user_metadata',
        // cacheLocation: 'localstorage', // doesn't seem to do anything! localstorage or memory
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}
