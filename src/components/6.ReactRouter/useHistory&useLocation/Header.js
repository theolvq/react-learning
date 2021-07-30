import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to='/'>Home</Link>
      <Link to='/services'>Service</Link>
    </header>
  );
}

export default Header;
