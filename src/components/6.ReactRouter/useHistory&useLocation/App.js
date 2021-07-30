import React from 'react';
import Header from './components/6.ReactRouter/useHistory&useLocation/Header';
import Home from './components/6.ReactRouter/useHistory&useLocation/pages/Home';
import ServicesList from './components/6.ReactRouter/useHistory&useLocation/pages/services/ServiceList';
import ServiceDetail from './components/6.ReactRouter/useHistory&useLocation/pages/services/ServiceDetail';

import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      {/* <Redirect to='/whatever' /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={ServicesList} />
        <Route path='/services/:serviceId' component={ServiceDetail} />
      </Switch>
    </div>
  );
}

export default App;
