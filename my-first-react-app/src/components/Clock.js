import React from 'react';
import Toggle from './Toggle';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <div className='App'>
          <header className='App-header'>
            <h1>Hello, World!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            <Toggle />
          </header>
        </div>
      </div>
    );
  }
}

export default Clock;
