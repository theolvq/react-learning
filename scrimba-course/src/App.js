import './App.css';
import React from 'react';
import Joke from './components/Joke';
// import ToDoItem from './components/ToDoItem';
// import ContactCard from './components/ContactCard';

function App() {
  return (
    <div className='App'>
      <div className='todo-list'>
        <Joke />
      </div>
    </div>
  );
}

export default App;
