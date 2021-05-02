import React from 'react';
import '../myStyles.css';

const Stylesheet = props => {
  let className = props.primary ? 'primary' : '';

  return (
    <div>
      <h1 className={`${className} font-xl`}>StyleSheet</h1>
    </div>
  );
};

export default Stylesheet;
