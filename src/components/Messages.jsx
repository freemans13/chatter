import React from "react";
import styled from "styled-components";

function Messages({ chat, messages }) {
  return (
    <Wrapper>
      <MessagesToolbar chat={chat} />
      <MessageList messages={messages} />
      <MessageInput />
    </Wrapper>
  );
}

function MessagesToolbar({ chat }) {
  return (
    <Header className="messagesToolbar">
      <div className="icon">{chat.icon}</div>
      <div className="chatHeading">{chat.chatHeading}</div>
      <div className="lastMessageTime">{chat.lastMessageTime}</div>
    </Header>
  );
}

function MessageList({ messages }) {
  return (
    <List className="messages">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </List>
  );
}

function Message({ message }) {
  return (
    <Item className={`${message.sender === "me" ? "myself" : "other"}`}>
      <span className="sender">{message.sender}</span>
      <span className={`message`}>{message.message}</span>
    </Item>
  );
}

function MessageInput() {
  return (
    <Form className="messageInput">
      <fieldset>
        <input type="text" placeholder="Type a message" />
      </fieldset>
    </Form>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
`;

const List = styled.ol`
  display: flex;
  gap: 8px;
  flex-direction: column;
  list-style-type: none;
  height: 100vh;
  overflow-y: auto;
  margin-right: 8px;
  flex: 1;
`;

const Item = styled.li`
  background-color: burlywood;
  border-radius: 16px;
  padding: 8px;
  width: fit-content;
  &.myself {
    background-color: chocolate;
    align-self: flex-end;
  }
  .sender {
    display: none;
  }
`;

const Form = styled.form`
  fieldset {
    border: none;
    /* flex: 1; */
  }
  input {
    width: 100%;
  }
`;

export default Messages;
