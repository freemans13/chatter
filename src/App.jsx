import React from "react";
import styled from "styled-components/macro";
import Chats from "./components/Chats";
import Messages from "./components/Messages";
import { sample } from "./sample";

const S = {}; // all Styled stuff here

function App() {
  const [chats, setChats] = React.useState(sample.chats);
  const [messages, setMessages] = React.useState(sample.messages);
  return (
    <S.Div>
      <S.Chats chats={chats} />
      <S.Messages
        chat={chats[0]}
        messages={messages}
        setMessages={setMessages}
      />
    </S.Div>
  );
}

S.Div = styled.div`
  display: flex;
  gap: 16px;
`;

S.Chats = styled(Chats)`
  min-width: 300px;
  flex: 1;
`;

S.Messages = styled(Messages)`
  min-width: 300px;
  flex: 3;
`;

export default App;
