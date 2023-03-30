import React from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { Pencil2Icon, GearIcon } from '@radix-ui/react-icons';
import './Toolbar.css';
import { useAuth0 } from '@auth0/auth0-react';

export default function ToolbarComponent() {
  const { user, isAuthenticated, loginWithRedirect, logout, getAccessTokenSilently } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  React.useEffect(() => {
    const doit = async () => {
      const config = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${await getAccessTokenSilently()}`,
        },
      };

      const result = await fetch(`http://localhost:5173/api/external`, config);
      const data = await result.json();
      // eslint-disable-next-line no-console
      console.log({ result, data });
    };
    doit();
  }, []);

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
        <Toolbar.Button className="ToolbarButton" onClick={() => loginWithRedirect({})}>
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
