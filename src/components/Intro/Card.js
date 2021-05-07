import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const styles = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width,
  };

  return <div style={styles}></div>;
}

Card.propTypes = {
  cardColor: PropTypes.oneOf(['blue', 'red', 'white']).isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

Card.defaultProps = {
  cardColor: 'purple',
  height: 100,
  width: 100,
};

export default Card;
