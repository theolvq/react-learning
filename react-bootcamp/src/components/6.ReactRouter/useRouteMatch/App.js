import React from 'react';

import Header from './components/6.ReactRouter/useRouteMatch/components/Header';
import Footer from './components/6.ReactRouter/useRouteMatch/components/Footer';
import Home from './components/6.ReactRouter/useRouteMatch/pages/Home';
import Profile from './components/6.ReactRouter/useRouteMatch/pages/profile/Profile';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
