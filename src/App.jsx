import { MagnifyingGlassIcon, ScissorsIcon } from "@radix-ui/react-icons";
import Toolbar from "./components/Toolbar";
// import "./App.css";
import styled from "styled-components/macro";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { useState } from "react";

function App() {
  return (
    <>
      <ChatWrapper>
        <LeftColumn>
          <Toolbar />
          <Search />
          <ChatList />
        </LeftColumn>
        <RightColumn>
          <Chat />
        </RightColumn>
      </ChatWrapper>
    </>
  );
}

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

function ChatList() {
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

function Chat() {
  return <div>Chat stuff goes here</div>;
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

const LeftColumn = styled.div`
  min-width: 400px;
  flex: 1;
`;

const RightColumn = styled.div`
  min-width: 300px;
  flex: 3;
`;

const ChatWrapper = styled.div`
  display: flex;
  gap: 8px;
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
    width: 2.7rem;
    margin: 2px 2px;
    padding-left: 0.5rem;
    font-size: 1.7rem;
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
    padding: 0 4px;
    gap: 8px;
    border-bottom: 1px solid #ccc;
  }
  .lastMessage {
    flex: 1;
  }
  footer.unreadMessageCount {
  }
`;

const chats = [
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Kingswood Firs Job",
    lastSender: "Gary",
    lastMessage: "I'm going to be late",
    lastMessageTime: "10:30am",
    unreadMessageCount: 2,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Beautiful Barlows",
    lastSender: "Adam",
    lastMessage: "Can you collect the cakes?",
    lastMessageTime: "19:12am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Freemans",
    lastSender: "Stu",
    lastMessage: "Brilliant",
    lastMessageTime: "22:53am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Kingswood Firs Job",
    lastSender: "Gary",
    lastMessage: "I'm going to be late",
    lastMessageTime: "10:30am",
    unreadMessageCount: 2,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Beautiful Barlows",
    lastSender: "Adam",
    lastMessage: "Can you collect the cakes?",
    lastMessageTime: "19:12am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Freemans",
    lastSender: "Stu",
    lastMessage: "Brilliant",
    lastMessageTime: "22:53am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Kingswood Firs Job",
    lastSender: "Gary",
    lastMessage: "I'm going to be late",
    lastMessageTime: "10:30am",
    unreadMessageCount: 2,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Beautiful Barlows",
    lastSender: "Adam",
    lastMessage: "Can you collect the cakes?",
    lastMessageTime: "19:12am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Freemans",
    lastSender: "Stu",
    lastMessage: "Brilliant",
    lastMessageTime: "22:53am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Kingswood Firs Job",
    lastSender: "Gary",
    lastMessage: "I'm going to be late",
    lastMessageTime: "10:30am",
    unreadMessageCount: 2,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Beautiful Barlows",
    lastSender: "Adam",
    lastMessage: "Can you collect the cakes?",
    lastMessageTime: "19:12am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Freemans",
    lastSender: "Stu",
    lastMessage: "Brilliant",
    lastMessageTime: "22:53am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Kingswood Firs Job",
    lastSender: "Gary",
    lastMessage: "I'm going to be late",
    lastMessageTime: "10:30am",
    unreadMessageCount: 2,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Beautiful Barlows",
    lastSender: "Adam",
    lastMessage: "Can you collect the cakes?",
    lastMessageTime: "19:12am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Freemans",
    lastSender: "Stu",
    lastMessage: "Brilliant",
    lastMessageTime: "22:53am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Kingswood Firs Job",
    lastSender: "Gary",
    lastMessage: "I'm going to be late",
    lastMessageTime: "10:30am",
    unreadMessageCount: 2,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Beautiful Barlows",
    lastSender: "Adam",
    lastMessage: "Can you collect the cakes?",
    lastMessageTime: "19:12am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Freemans",
    lastSender: "Stu",
    lastMessage: "Brilliant",
    lastMessageTime: "22:53am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Kingswood Firs Job",
    lastSender: "Gary",
    lastMessage: "I'm going to be late",
    lastMessageTime: "10:30am",
    unreadMessageCount: 2,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Beautiful Barlows",
    lastSender: "Adam",
    lastMessage: "Can you collect the cakes?",
    lastMessageTime: "19:12am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Freemans",
    lastSender: "Stu",
    lastMessage: "Brilliant",
    lastMessageTime: "22:53am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Kingswood Firs Job",
    lastSender: "Gary",
    lastMessage: "I'm going to be late",
    lastMessageTime: "10:30am",
    unreadMessageCount: 2,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Beautiful Barlows",
    lastSender: "Adam",
    lastMessage: "Can you collect the cakes?",
    lastMessageTime: "19:12am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Freemans",
    lastSender: "Stu",
    lastMessage: "Brilliant",
    lastMessageTime: "22:53am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Kingswood Firs Job",
    lastSender: "Gary",
    lastMessage: "I'm going to be late",
    lastMessageTime: "10:30am",
    unreadMessageCount: 2,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Beautiful Barlows",
    lastSender: "Adam",
    lastMessage: "Can you collect the cakes?",
    lastMessageTime: "19:12am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Freemans",
    lastSender: "Stu",
    lastMessage: "Brilliant",
    lastMessageTime: "22:53am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Kingswood Firs Job",
    lastSender: "Gary",
    lastMessage: "I'm going to be late",
    lastMessageTime: "10:30am",
    unreadMessageCount: 2,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Beautiful Barlows",
    lastSender: "Adam",
    lastMessage: "Can you collect the cakes?",
    lastMessageTime: "19:12am",
    unreadMessageCount: 0,
  },
  {
    id: crypto.randomUUID(),
    icon: "👩🏻‍💻",
    chatHeading: "Freemans",
    lastSender: "Stu",
    lastMessage: "Brilliant",
    lastMessageTime: "22:53am",
    unreadMessageCount: 0,
  },
];

export default App;
