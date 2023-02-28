import { MagnifyingGlassIcon, ScissorsIcon } from "@radix-ui/react-icons";
import Toolbar from "./Toolbar";
import styled from "styled-components/macro";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import React from "react";

const M = {}; // all Memo'd stuff here
const S = {}; // all Styled stuff here

const Chats = React.memo(({ className, chats }) => (
  <S.Div className={className}>
    <Toolbar />
    <Search />
    <List chats={chats} />
  </S.Div>
));

function Search() {
  return (
    <S.Form>
      <fieldset>
        <button>
          <MagnifyingGlassIcon width="24" height="24" />
        </button>
        <input type="search" placeholder="Search" />
      </fieldset>
    </S.Form>
  );
}

function List({ chats }) {
  return (
    <S.Ul>
      {chats.map((chat) => (
        <Item key={chat.id} chat={chat} />
      ))}
    </S.Ul>
  );
}

function Item({ chat }) {
  return (
    <S.Li>
      <div className="icon">{chat.icon}</div>
      <section>
        <header>
          <div className="header">{chat.chatHeading}</div>
          <div>{chat.lastMessageTime}</div>
        </header>
        <footer>
          <div className="sender">{chat.lastSender}: </div>
          <div className="lastMessage">{chat.lastMessage}</div>
          <div className="unreadMessageCount">{chat.unreadMessageCount}</div>
        </footer>
      </section>
    </S.Li>
  );
}

S.Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

S.Form = styled.form`
  fieldset {
    display: flex;
    border: none;
    padding: 4px;
    background-color: #eee;
  }
  input {
    flex: 1;
  }
`;

S.Ul = styled.ul`
  padding: 0;
  overflow-y: auto;
  /* list-style-type: none; */
`;

S.Li = styled.li`
  flex: 1;
  display: flex;

  &:hover {
    background-color: #eee;
    cursor: pointer;
  }

  .icon {
    /* image */
    width: 48px;
    margin: 8px;
    padding: 0 0 0 8px;
    font-size: 2rem;
    border-radius: 50%;
    overflow: none;
    background-color: #ccc;
  }
  section {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  header {
    display: flex;
    padding: 0 4px;
    padding-top: 8px;
  }
  header .header {
    flex: 1;
    font-weight: bold;
  }
  footer:first-child {
    border-bottom: 1px solid #ccc;
  }
  footer {
    display: flex;
    padding: 0 4px 8px 4px;
    gap: 8px;
    border-bottom: 1px solid #ccc;
  }
  .lastMessage {
    flex: 1;
  }
  footer.unreadMessageCount {
  }
`;

export default Chats;
