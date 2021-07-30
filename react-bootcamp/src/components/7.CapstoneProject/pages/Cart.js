import React, { useContext, useState } from 'react';
import CartItem from '../components/CartItem';
import { Context } from '../Context';

function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [isBeingOrdered, setIsBeingOrdered] = useState(false);

  const itemComponents = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));

  const calculateTotalCost = () =>
    (cartItems.length * 5.99).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

  const handleClick = e => {
    setIsBeingOrdered(true);
    e.preventDefault();
    setTimeout(() => {
      setIsBeingOrdered(false);
      console.log('order placed');
      emptyCart();
    }, 3000);
  };

  return (
    <main className='cart-page'>
      <h1>Check out</h1>
      {itemComponents}
      <p className='total-cost'>Total: {calculateTotalCost()}</p>
      <div className='order-button'>
        {cartItems.length > 0 ? (
          <button onClick={handleClick}>
            {isBeingOrdered ? 'Ordering...' : 'Place order'}
          </button>
        ) : (
          <p>You have no items in your cart</p>
        )}
      </div>
    </main>
  );
}

export default Cart;
