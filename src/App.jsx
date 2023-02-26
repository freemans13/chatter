import { MagnifyingGlassIcon, ScissorsIcon } from "@radix-ui/react-icons";
import Toolbar from "./components/Toolbar";
import { Search, ChatList } from "./components/Chats";
import Messages from "./components/Messages";
import styled from "styled-components/macro";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { chats, messages } from "./sample";

function App() {
  return (
    <Wrapper>
      <LeftColumn>
        <Toolbar />
        <Search />
        <ChatList chats={chats} />
      </LeftColumn>
      <RightColumn>
        <Messages chat={chats[0]} messages={messages} />
      </RightColumn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const LeftColumn = styled.div`
  min-width: 400px;
  flex: 1;
`;

const RightColumn = styled.div`
  min-width: 300px;
  flex: 3;
`;

export default App;
