import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/6.ReactRouter/NestedRoutes/Header';
import Footer from './components/6.ReactRouter/NestedRoutes/Footer';
import Profile from './components/6.ReactRouter/NestedRoutes/Pages/profile/Profile';
import Home from './components/6.ReactRouter/NestedRoutes/Pages/Home';
import Settings from './components/6.ReactRouter/NestedRoutes/Pages/profile/Settings';
import Info from './components/6.ReactRouter/NestedRoutes/Pages/profile/Info';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route path='/profile/info'>
          <Info />
        </Route>
        <Route path='/profile/settings'>
          <Settings />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
