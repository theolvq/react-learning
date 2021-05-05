import React, { Component } from 'react';
import './styles.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // console.log(e.target);
    if (e.target.id === 'mult3') {
      this.setState(prevState => {
        return {
          count: prevState.count * 3,
        };
      });
    }
    if (e.target.id === 'div2') {
      this.setState(prevState => {
        return {
          count: prevState.count / 2,
        };
      });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button id='mult3' onClick={this.handleClick}>
          Multiply by 3
        </button>
        <button id='div2' onClick={this.handleClick}>
          Divide by 2
        </button>
      </div>
    );
  }
}
export default App;
