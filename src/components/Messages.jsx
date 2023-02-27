import React from "react";
import styled from "styled-components";

function Messages({ chat, messages, setMessages }) {
  const handler = React.useCallback(
    (message) => {
      setMessages((current) => [
        {
          id: current.length + 1,
          message: message,
          date: new Date(),
          sender: "me",
        },
        ...current,
      ]);
      setTimeout(() => {
        setMessages((current) => [
          {
            id: current.length + 1,
            message: "I am a bot",
            date: new Date(),
            sender: "bot",
          },
          ...current,
        ]);
      }, Math.random() * 1000);
    },
    [setMessages]
  );

  return (
    <Wrapper>
      <MessagesToolbar chat={chat} />
      <MessageList messages={messages} />
      <MessageInput handler={handler} />
    </Wrapper>
  );
}

function uncachedMessagesToolbar({ chat }) {
  return (
    <Header className="messagesToolbar">
      <div className="icon">{chat.icon}</div>
      <div className="chatHeading">{chat.chatHeading}</div>
      <div className="lastMessageTime">{chat.lastMessageTime}</div>
    </Header>
  );
}
const MessagesToolbar = React.memo(uncachedMessagesToolbar);

function MessageList({ messages }) {
  return (
    <List className="messages">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </List>
  );
}

const Message = React.memo(({ message }) => {
  return (
    <Item className={`${message.sender === "me" ? "myself" : "other"}`}>
      <span className="sender">{message.sender}</span>
      <span className={`message`}>{message.message}</span>
    </Item>
  );
});

const MessageInput = React.memo(({ handler }) => {
  const inputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    if (!inputRef.current.value) return;

    handler(inputRef.current.value);
    inputRef.current.value = "";
  }
  return (
    <Form className="messageInput" onSubmit={handleSubmit}>
      <fieldset>
        <input ref={inputRef} type="text" placeholder="Type a message" />
      </fieldset>
    </Form>
  );
});

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
  flex-direction: column-reverse;
  gap: 8px;
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
