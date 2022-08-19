import AppBar from 'components/AppBar/AppBar';
import { Container } from 'components/GlobalStyle';
import { Outlet } from 'react-router-dom';
import { Box } from '../Box/Box';


export default function Layout ({chats}) {
  return (
      <Container>
      <Box display="grid" gridTemplateColumns="300px 1fr" p={4}>
      <AppBar chats={chats}/>
      <Outlet />
      </Box>
      </Container>
    );
};
