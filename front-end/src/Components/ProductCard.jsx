import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  return (
    <div>
      <div>{ product.name }</div>
      <div>{ product.url_image }</div>
      <div>{ product.price }</div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.objectOf({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
  }).isRequired,
};
