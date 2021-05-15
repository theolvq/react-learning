import React, { useContext } from 'react';
import { Context } from '../Context';
import PropTypes from 'prop-types';
import useHover from '../hooks/useHover';

const Image = ({ className, img }) => {
  const [hovered, hoverRef] = useHover();

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
    <div className={`${className} image-container`} ref={hoverRef}>
      <img src={img.url} className='image-grid' alt={img.id} />
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
