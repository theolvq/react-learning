import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './themeContext';

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className={`${theme}-theme`}>
      Switch Theme
    </button>
  );
};

Button.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
};

Button.defaultProps = {
  theme: 'light',
};

export default Button;
