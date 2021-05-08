import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();
// ThemeContext.Provider & ThemeContext.Consumer

class ThemeContextProvider extends Component {
  render() {
    return <Provider value={'dark'}>{this.props.children}</Provider>;
  }
}

export { Consumer as ThemeContextConsumer, ThemeContextProvider };
