import { Box } from 'components/Box/Box';
import ChatsList from 'components/ChatsList/ChatsList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import User from 'components/User/User';
import { useState } from 'react';

export default function AppBar({ chats }) {
  const [filter, setFilter] = useState('');

  const getVisibleChats = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    const visibleChats = chats.filter(chat =>
      chat.name.toLowerCase().includes(normalizedFilter)
    );

    return visibleChats;
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <Box as="header" border="1px solid black">
      <Box bg="grey" p={4}>
        <User
          photoUrl={
            'https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png'
          }
        />
        <SearchBox value={filter} onChange={changeFilter} />
      </Box>
      <Box p={4}>
        <h2>Chats</h2>
        <ChatsList chats={getVisibleChats()} />
      </Box>
    </Box>
  );
}
