import { MagnifyingGlassIcon, ScissorsIcon } from "@radix-ui/react-icons";
import Toolbar from "./components/Toolbar";
import { Search, ChatList } from "./components/Chats";
import Messages from "./components/Messages";
import styled from "styled-components/macro";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import React from "react";
import { sample } from "./sample";

function App() {
  const [chats, setChats] = React.useState(sample.chats);
  const [messages, setMessages] = React.useState(sample.messages);
  return (
    <Wrapper>
      <LeftColumn chats={chats} />
      <RightColumn>
        <Messages
          chat={chats[0]}
          messages={messages}
          setMessages={setMessages}
        />
      </RightColumn>
    </Wrapper>
  );
}

const Left = React.memo(({ chats }) => (
  <div>
    <Toolbar />
    <Search />
    <ChatList chats={chats} />
  </div>
));

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const LeftColumn = styled(Left)`
  min-width: 400px;
  flex: 1;
`;

const RightColumn = styled.div`
  min-width: 300px;
  flex: 3;
`;

export default App;
