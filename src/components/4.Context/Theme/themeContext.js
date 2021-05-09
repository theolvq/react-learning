import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();
// ThemeContext.Provider & ThemeContext.Consumer

class ThemeContextProvider extends Component {
  state = {
    theme: 'light',
  };

  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark',
    }));
  };

  render() {
    return (
      <Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer as ThemeContextConsumer, ThemeContextProvider };
