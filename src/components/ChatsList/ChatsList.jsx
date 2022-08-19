// import { NavLink } from 'react-router-dom';
import { Box } from '../Box/Box';
import { ItemLinkStyled } from './ChatsList.styled';


export default function ChatsList({chats}) {
    

    return (
      <Box as="ul" display="flex" flexDirection="column">
            {chats.map(({ id, name, message, photoUrl }) => {
                const { text, date } = message[message.length-1];
                return (
                    <ItemLinkStyled to={id} key={id} >
                        <img src={photoUrl} alt={name} width='40px' />
                        <h2>{ name}</h2>
                        <p>{text }</p>
                        <p>{date }</p>
                    </ItemLinkStyled>
                    
                );
            })}
    </Box>
    );
};
