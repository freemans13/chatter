import React from 'react';
import { styled } from '@linaria/react';
import { useAuth0 } from '@auth0/auth0-react';
import Chats from './components/Chats';
import Messages from './components/Messages';

const S = {}; // all Styled stuff here

function App() {
  // eslint-disable-next-line no-unused-vars
  const { isLoading, error } = useAuth0();
  const [chatId, setChatId] = React.useState();
  const closeChatHandler = React.useCallback(() => setChatId(null), []);

  // if (error) {
  //   return <div>Oops... {error.message}</div>;
  // }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <S.Div>
      <S.Chats style={{ '--display': chatId ? 'none' : 'revert' }} setChatId={setChatId} />
      {chatId && <S.Messages chatId={chatId} closeChatHandler={closeChatHandler} />}
    </S.Div>
  );
}

S.Div = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;
`;

S.Chats = styled(Chats)`
  min-width: 300px;
  flex: 1;

  @media (max-width: 600px) {
    & {
      display: var(--display);
    }
  }
`;

S.Messages = styled(Messages)`
  min-width: 300px;
  flex: 3;
`;

export default App;
