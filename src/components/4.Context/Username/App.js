import React, { Component } from 'react';
import Header from './components/4.Context/Username/Header';
import { UserContextConsumer } from './components/4.Context/Username/userContext';

class App extends Component {
  state = {
    newUsername: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <main>
          <UserContextConsumer>
            {({ username, changeUsername }) => (
              <div>
                <p className='main'>No new notifications, {username}! 🎉</p>
                <input
                  type='text'
                  name='newUsername'
                  placeholder='New username'
                  value={this.state.newUsername}
                  onChange={this.handleChange}
                />
                <button onClick={() => changeUsername(this.state.newUsername)}>
                  Change Username
                </button>
              </div>
            )}
          </UserContextConsumer>
        </main>
      </div>
    );
  }
}

export default App;

/**
 * Challenge: Add the ability for the user to choose a new username
 *
 * 1. Add state to this component to hold the new username in a controlled form
 * (https://reactjs.org/docs/forms.html#controlled-components)
 * (https://scrimba.com/p/p7P5Hd/cW8Jdfy)
 *
 * 2. Change userContext into a component that has state and provides the ability
 * to change the user's username. Make sure to export the provider and consumer
 * as named exports and update their uses anywhere else in the app
 *
 * 3. Give this App component the ability to update the username in context when the
 * button is clicked
 */
