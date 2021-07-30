import React, { useContext } from 'react';
import { Context } from '../Context';
import PropTypes from 'prop-types';
import useHover from '../hooks/useHover';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(Context);
  const [hovered, hoverRef] = useHover();

  const trashIconClass = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line';

  return (
    <div className='cart-item'>
      <i
        className={trashIconClass}
        onClick={() => removeFromCart(item.id)}
        ref={hoverRef}
      ></i>
      <img src={item.url} width='130px' alt={item.id} />
      <p>$5.99</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
