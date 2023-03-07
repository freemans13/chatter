import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import sample from './sample';

const DELAY = 1000;
// const fetcher = (url) => fetch(url).then((r) => r.json());
const chatsFetcher = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(sample.chats);
    }, DELAY);
  });

const chatFetcher = (url) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const chatId = url.split('/').pop();
      const result = sample.chats.find((chat) => chat.id === chatId);
      resolve(result);
    }, DELAY);
  });

const messagesFetcher = (url) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const chatId = url.split('/')[3];
      const result = sample.messages.filter((message) => message.chatId === chatId);
      resolve(result);
    }, DELAY);
  });

const messageAdder = (url, message) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const newMessage = {
        // chatId: "1",
        // sender: "sam",
        id: sample.messages.length + 1,
        ...message.arg,
        date: new Date(),
      };
      sample.messages = [newMessage, ...sample.messages];
      resolve(sample.messages.filter((m) => m.chatId === message.arg.chatId));
    }, 1);
  });

function useChats() {
  return useSWR('/api/chats', chatsFetcher);
}

function useChat(chatId) {
  return useSWR(`/api/chats/${chatId}`, chatFetcher);
}

function useMessages(chatId) {
  return useSWR(`/api/chats/${chatId}/messages`, messagesFetcher);
}

function useMessageAdd(chatId) {
  const { trigger } = useSWRMutation(`/api/chats/${chatId}/messages`, messageAdder, {
    revalidate: false,
    populateCache: true,
    rollbackOnError: true,
  });
  return { trigger };
}

export { useChats, useChat, useMessages, useMessageAdd };
