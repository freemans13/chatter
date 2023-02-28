import React from "react";
import styled from "styled-components";
import ChatIcon from "./ChatIcon";

const M = {}; // all Memo'd stuff here
const S = {}; // all Styled stuff here

function Messages({ className, chat, messages, setMessages }) {
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
    <S.Div className={className}>
      <M.Toolbar chat={chat} />
      <List messages={messages} />
      <M.Input handler={handler} />
    </S.Div>
  );
}

function Toolbar({ chat }) {
  return (
    <S.Header className="messagesToolbar">
      <ChatIcon />
      <div>
        <div className="header">{chat.chatHeading}</div>
        <div>{chat.contacts.join(", ")}</div>
      </div>
    </S.Header>
  );
}
M.Toolbar = React.memo(Toolbar);

function List({ messages }) {
  return (
    <S.Ol className="messages">
      {messages.map((message) => (
        <M.Item key={message.id} message={message} />
      ))}
    </S.Ol>
  );
}

function Item({ message }) {
  return (
    <S.Li className={`${message.sender === "me" ? "myself" : "other"}`}>
      <span className="sender">{message.sender}</span>
      <span className={`message`}>{message.message}</span>
    </S.Li>
  );
}
M.Item = React.memo(Item);

function Input({ handler }) {
  const ref = React.useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!ref.current.value) return;
    handler(ref.current.value);
    ref.current.value = "";
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <fieldset>
        <input type="text" placeholder="Type a message" ref={ref} />
      </fieldset>
    </S.Form>
  );
}
M.Input = React.memo(Input);

S.Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

S.Header = styled.header`
  display: flex;
  .header {
    padding-top: 8px;
    font-weight: bold;
  }
`;

S.Ol = styled.ol`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  list-style-type: none;
  height: 100vh;
  overflow-y: auto;
  flex: 1;
  padding-left: 0.75em;
  padding-right: 0.75em;
`;

S.Li = styled.li`
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

S.Form = styled.form`
  fieldset {
    border: none;
    /* flex: 1; */
  }
  input {
    width: 100%;
  }
`;

export default Messages;
