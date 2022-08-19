import { Box } from "components/Box/Box";
import ChatsList from "components/ChatsList/ChatsList";
import { SearchBox } from "components/SearchBox/SearchBox";
import User from "components/User/User";
import { useState } from "react";




export default function AppBar({chats}) {

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
        <Box as="header" p={4} height="100vh" borderRight="1px solid black">
            <User />
            <SearchBox value={filter} onChange={changeFilter} />
            <ChatsList chats={getVisibleChats()} />
        </Box>
        
    );
  
    

};
