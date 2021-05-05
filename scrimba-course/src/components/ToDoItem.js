import React from 'react';

const ToDoItem = props => {
  return (
    <div className='todo-item'>
      <input type='checkbox' checked={props.todo.completed} />
      <label>{props.todo.text}</label>
    </div>
  );
};

export default ToDoItem;
