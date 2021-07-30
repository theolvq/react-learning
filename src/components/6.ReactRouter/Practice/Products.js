import React from 'react';
import { Link } from 'react-router-dom';
import productsData from './productsData';

function Products() {
  const products = productsData.map(product => (
    <div key={product.id}>
      <Link to={`products/${product.id}`}>
        <h2>{product.name}</h2>
      </Link>
      <p>${product.price}</p>
      <hr />
    </div>
  ));

  return (
    <>
      <h1>Products Page</h1>
      {products}
    </>
  );
}

export default Products;
