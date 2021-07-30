import React from 'react';
import useToggler from './useToggler';

const Menu = props => {
  const [isMenuToggled, toggleMenu] = useToggler(true);

  return (
    <div>
      <button onClick={toggleMenu}>
        {isMenuToggled ? 'Hide' : 'Show'}Menu
      </button>
      <nav style={{ display: isMenuToggled ? 'block' : 'none' }}>
        <p>
          <span>Your Profile</span>
        </p>
        <p>
          <span>Your Repositories</span>
        </p>
        <p>
          <span>Your Stars</span>
        </p>
        <p>
          <span>Your Gists</span>
        </p>
      </nav>
    </div>
  );
};

export default Menu;
