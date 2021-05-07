import React, { Component } from 'react';

class Toggler extends Component {
  state = {
    on: this.props.defaultOnValue,
  };

  toggle = () => {
    this.setState(prevState => {
      return {
        on: !prevState.on,
      };
    });
  };

  render() {
    const { component: C, defaultOnValue, ...props } = this.props;
    return <C on={this.state.on} toggle={this.toggle} {...props} />;
  }
}

export const withToggler = (component, optionsObj) => {
  return props => (
    <Toggler
      component={component}
      defaultOnValue={optionsObj.defaultOnValue}
      {...props}
    />
  );
};
