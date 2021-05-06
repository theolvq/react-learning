import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }

  render() {
    const headingText = this.state.isLoggedIn ? 'in' : 'out';
    const buttonText = this.state.isLoggedIn ? 'out' : 'in';

    return (
      <div>
        <h1>Your are logged {headingText}</h1>
        <button onClick={this.handleClick}>Log {buttonText}</button>
      </div>
    );
  }
}

export default App;
