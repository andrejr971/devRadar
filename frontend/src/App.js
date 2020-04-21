import React from 'react';
import { ToastContainer } from 'react-toastify';
import Sidebar from './components/Sidebar';

import 'react-toastify/dist/ReactToastify.css';

import { Container } from './styles/component';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Container>
      <Sidebar />
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
