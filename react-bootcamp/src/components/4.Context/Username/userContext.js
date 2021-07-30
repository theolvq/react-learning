import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();

class UserContextProvider extends Component {
  state = {
    username: 'Theo',
  };

  changeUsername = username => {
    this.setState({ username: username });
  };

  render() {
    const { username } = this.state;
    return (
      <Provider value={{ username, changeUsername: this.changeUsername }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer as UserContextConsumer, UserContextProvider };
