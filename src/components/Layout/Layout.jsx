import AppBar from 'components/AppBar/AppBar';
import { Outlet, useParams } from 'react-router-dom';
import { LoyoutStyled, StartMessageStyled } from './Layout.styled';

export default function Layout({ chats }) {
  const { id } = useParams();

  return (
    <LoyoutStyled>
      {id ? (
        <>
          <AppBar chats={chats} />
          <Outlet />
        </>
      ) : (
        <>
          <AppBar chats={chats} />
          <StartMessageStyled>
            <div></div>
            <h2>Select a chat to start a conversation.</h2>
            <div></div>
          </StartMessageStyled>
        </>
      )}
    </LoyoutStyled>
  );
}
