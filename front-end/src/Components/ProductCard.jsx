import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  return (
    <div>
      <div
        data-testid={ `customer_products__element-card-title-${product.id}` }
      >
        { product.name }
      </div>
      <img
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.url_image }
        alt={ product.name }
      />
      <div
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        { product.price }
      </div>
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
