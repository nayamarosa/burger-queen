import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Saloon from './pages/Saloon'
import Kitchen from './pages/Kitchen'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  

  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/saloon" exact component={Saloon} />
        <Route path="/kitchen" exact component={Kitchen} />
      </div>
      </Router>
    );
  }
}

export default App;
