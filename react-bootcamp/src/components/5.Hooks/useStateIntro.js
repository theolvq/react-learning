import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name] = useState('Lily');

  return (
    <div className='App'>
      <h1>{name}, my lovely child</h1>
    </div>
  );
};

export default App;
