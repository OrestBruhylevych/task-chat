import Chat from 'pages/Chat/Chat';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Layout from './Layout/Layout';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/:id" element={<Chat/>} />
        </Route>
        <Route path="*" element={<div>NotFound</div> } />
      </Routes>
      <GlobalStyle />
    </>
  );
};
