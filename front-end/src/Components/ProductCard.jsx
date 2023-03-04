import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';

export default function ProductCard({ product }) {
  const price = product.price.replace('.', ',');

  return (
    <div>
      <h3
        data-testid={ `customer_products__element-card-title-${product.id}` }
      >
        { product.name }
      </h3>
      <img
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.url_image }
        alt={ product.name }
      />
      <p
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        { price }
      </p>
      <Button symbol="-" id={ product.id } type="rm" />
      <Input type="number" id={ product.id } />
      <Button symbol="+" id={ product.id } type="add" />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.objectOf({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
  }),
}.isRequired;
