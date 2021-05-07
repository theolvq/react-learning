import React from 'react';
import PropTypes from 'prop-types';

function RoundedImg(props) {
  return (
    <div>
      <img
        src={props.src}
        style={{ borderRadius: props.borderRadius }}
        className='round-img'
        alt='Cute'
      />
    </div>
  );
}

RoundedImg.propTypes = {
  src: PropTypes.string.isRequired,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

RoundedImg.defaultProps = {
  borderRadius: '50%',
};

export default RoundedImg;
