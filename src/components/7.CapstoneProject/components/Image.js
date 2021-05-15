import React, { useContext, useState } from 'react';
import { Context } from '../Context';
import PropTypes from 'prop-types';

const Image = ({ className, img }) => {
  const [hovered, setHovered] = useState(false);

  const { toggleFavorite, addToCart, removeFromCart, cartItems } =
    useContext(Context);

  const isInCart = id => cartItems.some(item => item.id === id);

  const cartIcon = isInCart(img.id) ? (
    <i
      onClick={() => removeFromCart(img.id)}
      className='ri-shopping-cart-fill cart'
    ></i>
  ) : (
    hovered && (
      <i onClick={() => addToCart(img)} className='ri-add-circle-line cart'></i>
    )
  );
  const heartIcon = img.isFavorite ? (
    <i
      onClick={() => toggleFavorite(img.id)}
      className='ri-heart-fill favorite'
    ></i>
  ) : (
    hovered && (
      <i
        onClick={() => toggleFavorite(img.id)}
        className='ri-heart-line favorite'
      ></i>
    )
  );

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className='image-grid' />
      {cartIcon}
      {heartIcon}
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
