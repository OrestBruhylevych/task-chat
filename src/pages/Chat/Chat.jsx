import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMassegeFromChuck } from 'services/chuckNorrisAPI';
import SendMessageForm from 'components/SendMessageForm/SendMessageForm';
import { useState } from 'react';
import { useEffect } from 'react';
import User from 'components/User/User';
import MassegeList from 'components/MassegeList/MassegeList';
import { Box } from 'components/Box/Box';
import { ChatStyledWrap } from './Chat.styled';

export default function Chat({ chats, setChats }) {
  const { id } = useParams();
  const [chat, setChat] = useState(() => chats.find(chat => chat.id === id));
  const { name, message, photoUrl } = chat;

  useEffect(() => {
    setChat(chats.find(chat => chat.id === id));
  }, [chats, id]);

  const addMessage = values => {
    if (values.text.trim() === '') {
      return;
    }

    setChats(prevState => {
      return prevState.map(chat => {
        if (chat.id === id) {
          return { ...chat, message: [...chat.message, values] };
        }
        return chat;
      });
    });

    setTimeout(() => {
      addMessageFromChuck();
      Notify.success(`The user ${name} sent you a message)`);
    }, 12000);
  };

  const addMessageFromChuck = () => {
    getMassegeFromChuck()
      .then(res => {
        const newMassege = { text: '', id: '', date: '', fromUser: false };
        const date = new Date();
        newMassege.text = res;
        newMassege.id = nanoid();
        newMassege.date = date.toLocaleString();

        setChats(prevState => {
          const newChats = prevState.map(chat => {
            if (chat.id === id) {
              return { ...chat, message: [...chat.message, newMassege] };
            }
            return chat;
          });

          const topChat = newChats.find(chat => chat.id === id);

          return [topChat, ...newChats.filter(chat => chat.id !== id)];
        });
      })
      .catch(e => console.log(e));
  };

  return (
    <ChatStyledWrap>
      <Box bg="grey" p={4}>
        <User photoUrl={photoUrl} name={name} />
      </Box>
      <MassegeList message={message} />
      <SendMessageForm addMessage={addMessage} />
    </ChatStyledWrap>
  );
}
