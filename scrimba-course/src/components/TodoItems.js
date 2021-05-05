import React from 'react';

const ToDoItem = props => {
  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        checked={props.todo.completed}
        onChange={() => console.log('I changed')}
      />
      <label>{props.todo.text}</label>
    </div>
  );
};

export default ToDoItem;

// function App() {
//   const toDoComponents = ToDoData.map(item => (
//     <ToDoItem key={item.id} todo={item} />
//   ));

//   return <div className='todo-list'>{toDoComponents}</div>;
// }

// import React from 'react';
// import TodoItem from './components/TodoItems';
// import todosData from './components/TodoData';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: todosData,
//     };
//     console.log(this.state);
//   }

//   render() {
//     const todoItems = this.state.todos.map(item => (
//       <TodoItem key={item.id} todo={item} />
//     ));

//     return <div className='todo-list'>{todoItems}</div>;
//   }
// }

// export default App;
