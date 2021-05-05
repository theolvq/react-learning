import React from 'react';

const Product = props => {
  return (
    <div>
      <h3>{props.product.name}</h3>
      <span>
        {props.product.price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </span>
      <p>{props.product.description}</p>
    </div>
  );
};

export default Product;

// function App() {
//   const productComponents = ProductsData.map(product => (
//     <Product key={product.id} product={product} />
//   ));

//   return <div className='App'>{productComponents}</div>;
// }
