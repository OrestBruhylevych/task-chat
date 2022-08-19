import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Box } from '../Box/Box';


export default function Layout ({chats}) {
    return (
         <Box display="grid" gridTemplateColumns="300px 1fr">
      <AppBar chats={chats}/>
      <Outlet />
    </Box>
    );
};
