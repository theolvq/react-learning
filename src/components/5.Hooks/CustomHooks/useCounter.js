import { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevState => prevState + 1);

  return [count, increment];
};

export default useCounter;
