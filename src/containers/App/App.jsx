import React from 'react';
import Header from '../../components/Header'
// import HeaderLooged from '../../components/HeaderLogged';

import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter className="App">
        <Header />
        {/* <HeaderLooged /> */}
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
