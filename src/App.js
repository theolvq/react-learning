import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/6.ReactRouter/DynamicNestedRoutes/Header';
import Home from './components/6.ReactRouter/DynamicNestedRoutes/Home';
import ServiceDetail from './components/6.ReactRouter/DynamicNestedRoutes/pages/services/ServiceDetail';
import ServiceList from './components/6.ReactRouter/DynamicNestedRoutes/pages/services/ServiceList';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/services'>
          <ServiceList />
        </Route>
        <Route path='/services/:serviceId'>
          <ServiceDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
