import './App.css';
import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(count - 1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      increment();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <div className='App'>
      <h1 style={{ color: color }}>{count}</h1>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
    </div>
  );
};

export default App;
