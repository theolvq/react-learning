import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello',
    };
    //*Bind in constructore (recommended)
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  //   this.setState({
  //     message: 'Goodbye',
  //   });
  // }
  // * Bind as an arrow function method in the class => Best solution
  clickHandler = () => {
    this.setState({
      message: 'Goodbye!',
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Bind in the click event (not recommended) */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Bind through arrow function in event(not recommended) */}
        <button onClick={() => this.clickHandler()}>Click</button>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
