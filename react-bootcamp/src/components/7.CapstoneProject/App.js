import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/7.CapstoneProject/components/Header';
import Cart from './components/7.CapstoneProject/pages/Cart.js';
import Photos from './components/7.CapstoneProject/pages/Photos';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Photos />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css
