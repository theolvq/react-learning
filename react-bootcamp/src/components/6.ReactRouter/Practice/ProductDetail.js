import React from 'react';
import { useParams } from 'react-router';
import productsData from './productsData';

const ProductDetail = () => {
  const { productId } = useParams();
  const thisProduct = productsData.find(prod => prod.id === productId);
  return (
    <div>
      <h2>
        {thisProduct.name} - {thisProduct.price}
      </h2>
      <p>{thisProduct.description}</p>
    </div>
  );
};

export default ProductDetail;
