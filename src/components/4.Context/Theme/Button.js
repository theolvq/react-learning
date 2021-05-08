import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return <button className={`${props.theme}-theme`}>Switch Theme</button>;
};

Button.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
};

Button.defaultProps = {
  theme: 'light',
};

export default Button;
