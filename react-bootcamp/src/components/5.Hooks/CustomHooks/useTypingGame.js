import { useState, useRef, useEffect } from 'react';

const useTypingGame = startingTime => {
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

  return {
    text,
    timer,
    isGameRunning,
    wordCount,
    textRef,
    handleChange,
    startGame,
  };
};

export default useTypingGame;
