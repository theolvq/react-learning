import './App.css';
import React from 'react';
import ToDoItem from './components/ToDoItem';
import ToDoData from './components/ToDoData';

function App() {
  const toDoComponents = ToDoData.map(item => (
    <ToDoItem key={item.id} todo={item} />
  ));

  return <div className='todo-list'>{toDoComponents}</div>;
}

export default App;
