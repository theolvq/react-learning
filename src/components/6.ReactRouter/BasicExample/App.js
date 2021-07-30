import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/6.ReactRouter/BasicExample/Home';
import About from './components/6.ReactRouter/BasicExample/About';
import Contact from './components/6.ReactRouter/BasicExample/Contact';

function App() {
  return (
    <div className='App'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
