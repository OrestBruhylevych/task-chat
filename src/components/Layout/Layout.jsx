import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { LoyoutStyled } from './Layout.styled';

export default function Layout({ chats }) {
  return (
    <LoyoutStyled>
      <AppBar chats={chats} />
      <Outlet />
    </LoyoutStyled>
  );
}
