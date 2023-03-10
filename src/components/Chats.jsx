import React from 'react';
import { styled } from '@linaria/react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Toolbar from './Toolbar';
import ChatIcon from './ChatIcon';
import * as API from '../api';

const M = {}; // all Memo'd stuff here
const S = {}; // all Styled stuff here

function Chats({ style, className, setChatId }) {
  const { data: chats = [], isLoading, error } = API.useChats();

  React.useEffect(() => {
    // this is a hack to make the first chat selected
    if (chats?.length > 0) setChatId(chats[0].id);
  }, [chats, setChatId]);

  return (
    <S.Div style={style} className={className}>
      <Toolbar />
      <Search />
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <List chats={chats} setChatId={setChatId} />
    </S.Div>
  );
}

M.Chats = React.memo(Chats);

function Search() {
  return (
    <S.Form>
      <fieldset>
        <button type="submit">
          <MagnifyingGlassIcon width="24" height="24" />
        </button>
        <input type="search" placeholder="Search" />
      </fieldset>
    </S.Form>
  );
}

function List({ chats, setChatId }) {
  const handleOnClick = (event) => {
    setChatId(event.currentTarget.attributes['data-chatid'].value);
  };
  return (
    <S.Ul>
      {chats.map((chat) => (
        <Item key={chat.id} chat={chat} onClick={handleOnClick} />
      ))}
    </S.Ul>
  );
}

function Item({ chat, onClick }) {
  return (
    <S.Li data-chatid={chat.id} onClick={onClick}>
      <ChatIcon />
      <section>
        <header>
          <div className="header">{chat.chatHeading}</div>
          <div>{chat.lastMessageTime}</div>
        </header>
        <footer>
          <div className="sender">{chat.lastSender}: </div>
          <div className="last-message">{chat.lastMessage}</div>
          {chat.unreadMessageCount > 0 && <div className="unreadMessageCount">{chat.unreadMessageCount}</div>}
        </footer>
      </section>
    </S.Li>
  );
}

S.Div = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
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

  section {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
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

  footer {
    display: flex;
    padding: 0 4px 8px;
    gap: 8px;
    border-bottom: 1px solid #ccc;
  }

  footer:first-child {
    border-bottom: 1px solid #ccc;
  }

  .last-message {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default M.Chats;
