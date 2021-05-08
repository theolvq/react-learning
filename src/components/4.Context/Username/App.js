import React from 'react';
import Header from './components/4.Context/Username/Header';
import UserContext from './components/4.Context/Username/userContext';

const App = props => (
  <UserContext.Consumer>
    {username => (
      <div>
        <Header username={username} />
        <main>
          <p className='main'>No new notifications, {username}! 🎉</p>
        </main>
      </div>
    )}
  </UserContext.Consumer>
);

export default App;
