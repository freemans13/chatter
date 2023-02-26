import { MagnifyingGlassIcon, ScissorsIcon } from "@radix-ui/react-icons";
import Toolbar from "./Toolbar";
import styled from "styled-components/macro";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

function Search() {
  return (
    <Form className="search">
      <fieldset>
        <button>
          <MagnifyingGlassIcon width="24" height="24" />
        </button>
        <input type="search" placeholder="Search" />
      </fieldset>
    </Form>
  );
}

function ChatList({ chats }) {
  return (
    <List className="chatList">
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </List>
  );
}

function ChatItem({ chat }) {
  return (
    <Item className="chatItem">
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
    </Item>
  );
}

const Form = styled.form`
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

const List = styled.ul`
  padding: 0;
  height: 100vh;
  overflow-y: auto;
`;

const Item = styled.li`
  list-style-type: none;
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

export { Search, ChatList };
