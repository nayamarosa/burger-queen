import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import { MenuProvider } from '../Context';

import './App.scss';

const App = () => (
  <MenuProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </MenuProvider>
);

export default App;