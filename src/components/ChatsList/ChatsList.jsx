import { getChats } from '../../services/fakeAPI'
import { NavLink } from 'react-router-dom';
import { Box } from '../Box/Box';
import { useState } from 'react';


export default function ChatsList(params) {
    const [chats] = useState(getChats())

    return (
      <Box as="ul" display="flex" flexDirection="column">
            {chats.map(({ id, name, message, photoUrl }) => {
                const { text, date } = message[message.length-1];
                return (
                    <NavLink to={`${id}`} key={id}>
                        <img src={photoUrl} alt={name} width='16px' />
                        <p>{text }</p>
                        <p>{date }</p>
                    </NavLink>
                );
            })}
    </Box>
    );
};
