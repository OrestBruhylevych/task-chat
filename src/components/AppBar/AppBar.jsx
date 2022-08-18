import { Box } from "components/Box/Box";
import ChatsList from "components/ChatsList/ChatsList";
import { SearchBox } from "components/SearchBox/SearchBox";
import User from "components/User/User";



export default function AppBar() {
    
    return (
        <Box as="header" p={4} height="100vh" borderRight="1px solid black">
            <User />
            <SearchBox />
            <ChatsList/>
        </Box>
        
    );
  
    

};
