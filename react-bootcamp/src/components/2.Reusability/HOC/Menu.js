import React from 'react';
import { withToggler } from './withToggler';

const Menu = props => {
  return (
    <div>
      <button onClick={props.toggle}>{props.on ? 'Hide' : 'Show'} Menu </button>
      <nav style={{ display: props.on ? 'block' : 'none' }}>
        <h6>Signed in as Coder123</h6>
        <span>Your Profile</span>
        <span>Your Repositories</span>
        <span>Your Stars</span>
        <span>Your Gists</span>
      </nav>
    </div>
  );
};

export default withToggler(Menu, { defaultOnValue: true });
