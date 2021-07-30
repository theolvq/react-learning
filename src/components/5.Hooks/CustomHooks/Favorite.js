import React from 'react';
import useToggler from './useToggler';

const Favorite = props => {
  const [isFavToggled, toggleFav] = useToggler(false);

  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1 onClick={toggleFav}> {isFavToggled ? '❤️' : '♡'}</h1>
    </div>
  );
};

export default Favorite;
