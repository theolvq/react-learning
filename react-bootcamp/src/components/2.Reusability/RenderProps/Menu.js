import React from 'react';
import Toggler from './Toggler';

const Menu = props => (
  <Toggler
    defaultOnValue={true}
    render={({ on, toggle }) => (
      <div>
        <button onClick={toggle}>{on ? 'Hide' : 'Show'} Menu </button>
        <nav style={{ display: on ? 'block' : 'none' }}>
          <h6>Signed in as Coder123</h6>
          <span>Your Profile</span>
          <span>Your Repositories</span>
          <span>Your Stars</span>
          <span>Your Gists</span>
        </nav>
      </div>
    )}
  />
);

export default Menu;
