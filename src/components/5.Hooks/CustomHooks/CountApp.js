import React from 'react';
import useCounter from './components/5.Hooks/CustomHooks/useCounter';

const App = () => {
  const [count, increment] = useCounter();

  return (
    <div>
      <h1>The counts is {count}</h1>
      <button onClick={increment}> + 1 </button>
    </div>
  );
};

export default App;
