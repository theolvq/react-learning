import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
// import reportWebVitals from './reportWebVitals';

// class Background extends React.Component {
//   render() {
//     return (

//     );
//   }
// }

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

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <div>
    <Clock />
  </div>,
  document.getElementById('root')
);

// function tick() {
//   return ReactDOM.render(<Clock />, document.getElementById('root'));
// }

// tick();
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     <Tick />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
