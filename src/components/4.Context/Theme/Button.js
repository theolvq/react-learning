import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContextConsumer } from './themeContext';

const Button = () => {
  return (
    <ThemeContextConsumer>
      {({ theme, toggleTheme }) => (
        <button onClick={toggleTheme} className={`${theme}-theme`}>
          Switch Theme
        </button>
      )}
    </ThemeContextConsumer>
  );
};

Button.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
};

Button.defaultProps = {
  theme: 'light',
};

export default Button;
