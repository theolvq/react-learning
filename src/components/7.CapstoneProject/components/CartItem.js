import React, { useContext, useState } from 'react';
import { Context } from '../Context';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(Context);
  const [hovered, setHovered] = useState(false);

  const trashIconClass = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line';

  return (
    <div className='cart-item'>
      <i
        className={trashIconClass}
        onClick={() => removeFromCart(item.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      ></i>
      <img src={item.url} width='130px' />
      <p>$5.99</p>
    </div>
  );
};

export default CartItem;
