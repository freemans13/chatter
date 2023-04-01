import React from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { Pencil2Icon, GearIcon } from '@radix-ui/react-icons';
import './Toolbar.css';
import { useAuth0 } from '@auth0/auth0-react';
import authConfig from '../auth0/auth-config.json';

export default function ToolbarComponent() {
  const { user, isAuthenticated, loginWithRedirect, logout, getAccessTokenSilently } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  React.useEffect(() => {
    if (!user['https://chatter.team-freeman.com/user_id']) {
      // eslint-disable-next-line no-inner-declarations
      async function doIt() {
        const accessToken = await getAccessTokenSilently({
          scope: 'openid profile email update:current_user_metadata',
          // cacheMode: 'cache-only',// doesn't seem to do anything! cache-only or no-cache
        });
        const config = {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ user, accessToken }),
        };

        const result = await fetch(`http://localhost:5173/api/userRef`, config);
        const data = await result.json();

        user['https://chatter.team-freeman.com/user_id'] = data.user_metadata.chatter_user_id;
      }
      doIt();

      // eslint-disable-next-line no-inner-declarations
      async function doItAgain() {
        const config = {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${await getAccessTokenSilently()}`,
          },
        };
        const result = await fetch(`http://localhost:5173/api/users`, config);
        const data = await result.json();
        // eslint-disable-next-line no-console
        console.log('users', { result, data });
      }
      doItAgain();
    }
  }, [user]);

  return (
    <Toolbar.Root className="ToolbarRoot" aria-label="Chat options">
      <Toolbar.Button className="ToolbarButton" style={{ marginLeft: 'auto' }} aria-label="Settings">
        <GearIcon />
      </Toolbar.Button>
      <Toolbar.Separator className="ToolbarSeparator" />
      <Toolbar.Button className="ToolbarButton" aria-label="New Chat">
        <Pencil2Icon />
      </Toolbar.Button>
      {!isAuthenticated && (
        <Toolbar.Button
          className="ToolbarButton"
          onClick={() =>
            loginWithRedirect({
              audience: authConfig.audience,
              scope: 'openid profile email update:current_user_metadata',
            })
          }
        >
          Log in
        </Toolbar.Button>
      )}
      {isAuthenticated && (
        <Toolbar.Button className="ToolbarButton" onClick={() => logoutWithRedirect()}>
          Log out {user.preferred_username}
        </Toolbar.Button>
      )}
    </Toolbar.Root>
  );
}
