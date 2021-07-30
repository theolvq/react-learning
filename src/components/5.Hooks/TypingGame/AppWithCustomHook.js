import './App.css';
import React from 'react';
import useTypingGame from './components/5.Hooks/CustomHooks/useTypingGame';

//

const App = () => {
  const {
    text,
    timer,
    isGameRunning,
    wordCount,
    textRef,
    handleChange,
    startGame,
  } = useTypingGame();

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
