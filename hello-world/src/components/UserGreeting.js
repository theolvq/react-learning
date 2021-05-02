import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // * Short Circuit Operator, sketchy because can return nothing
    // return this.state.isLoggedIn && <div>Welcome Theo</div>;
    // * Ternary Operator
    return this.state.isLoggedIn ? (
      <div>Welcome Theo</div>
    ) : (
      <div>Welcome Guest</div>
    );
    // * Element variables
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Theo</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;
    // * If Statement
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Theo</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <p>Welcome User</p>
    //     <p>Welcome Theo</p>
    //   </div>
    // );
  }
}

export default UserGreeting;
