import React, { Component } from 'react';
import './App.css';

// Challenge:
// Given an incomplete class-based component without a constructor,
// add a constructor and initialize state to fix the broken component.

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Theo',
      age: 30,
    };
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    );
  }
}

export default App;
