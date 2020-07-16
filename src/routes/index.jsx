import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login';
import Saloon from './Saloon';
import Kitchen from './Kitchen';
import Admin from './Admin';

const Routes = () => (
<Switch>
  <Route exact path="/">
    <Login />
  </Route>
  
  <Route path="/saloon">
    <Saloon />
  </Route>
  
  <Route path="/kitchen">
    <Kitchen />
  </Route>
  
  <Route path="/admin">
    <Admin />
  </Route>
</Switch>
);

export default Routes;