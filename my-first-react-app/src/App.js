import React from 'react';
// import Clock from './components/Clock';

import './App.css';
import Greeting from './components/Greeting';
import LoginControl from './components/LoginControl';

const App = () => {
  return (
    <div>
      <Greeting isLoggedin={false} />
      <LoginControl />
    </div>
  );
};

export default App;
