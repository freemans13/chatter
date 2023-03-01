import React from "react";
import styled from "styled-components/macro";
import Chats from "./components/Chats";
import Messages from "./components/Messages";

const S = {}; // all Styled stuff here

function App() {
  const [chatId, setChatId] = React.useState();

  return (
    <S.Div>
      <S.Chats setChatId={setChatId} />
      <S.Messages chatId={chatId} />
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
