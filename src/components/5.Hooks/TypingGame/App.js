import './App.css';
import React, { useState, useEffect, useRef } from 'react';

//

const App = () => {
  const STARTING_TIME = 5;

  const [text, setText] = useState('');
  const [timer, setTimer] = useState(STARTING_TIME);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textRef = useRef(null);

  const handleChange = e => {
    setText(e.target.value);
  };

  const countWords = str =>
    str
      .trim()
      .split(' ')
      .filter(word => word !== '').length;

  const startGame = () => {
    setIsGameRunning(true);
    setTimer(STARTING_TIME);
    setText('');
    textRef.current.disabled = false;
    textRef.current.focus();
  };

  const stopGame = () => {
    setIsGameRunning(false);
    setWordCount(countWords(text));
  };

  useEffect(() => {
    if (timer > 0 && isGameRunning)
      setTimeout(() => setTimer(prevTime => prevTime - 1), 1000);
    if (timer === 0) {
      stopGame();
    }
  }, [timer, isGameRunning]);

  return (
    <>
      <h1>Best typing game ever!</h1>
      <textarea
        name='game'
        value={text}
        cols='30'
        rows='10'
        onChange={handleChange}
        disabled={!isGameRunning}
        ref={textRef}
      />
      <h4>Time remaining: {timer}</h4>
      <button disabled={isGameRunning} onClick={startGame}>
        Start!
      </button>
      <h2>Number of words: {wordCount}</h2>
    </>
  );
};

export default App;

// useEffect hook is considered a remplacement for 3 lifecycle methods:
// componentDidMount
// componentDidUpdate
// componentWillUnmount
// Above all it's a hook that allows us to apply side effect:
// network request,
// manual DOM manipulation,
// event listeners,
// or timeouts and intervals
