import React, { Component } from 'react';

class Toggler extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState(prevState => {
      return {
        on: !prevState.on,
      };
    });
  };

  render() {
    const C = this.props.component;
    return <C on={this.state.on} toggle={this.toggle} {...this.props} />;
  }
}

export const withToggler = component => {
  return props => <Toggler component={component} {...props} />;
};
