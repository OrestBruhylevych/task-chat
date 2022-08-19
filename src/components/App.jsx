
import { useLocalStorage } from '../hooks/useLocalStorage';
import { chatsData } from '../services/fakeAPI';


import Chat from 'pages/Chat/Chat';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Layout from './Layout/Layout';

const LS_KEY = 'contacts';


export const App = () => {
  const [chats, setChats] = useLocalStorage(LS_KEY, chatsData);
  
 

  


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout chats={ chats} />}>
          <Route path="/:id" element={<Chat chats={chats} setChats={ setChats} />} />
        </Route>
        <Route path="*" element={<div>NotFound</div> } />
      </Routes>
      <GlobalStyle />
    </>
  );
};
