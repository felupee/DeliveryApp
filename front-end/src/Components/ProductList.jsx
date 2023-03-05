import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

function ProductList({ products }) {
  return (
    <section>
      { products?.map((product) => (
        <div key={ product.id }>
          <ProductCard product={ product } />
        </div>
      )) }
    </section>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.objectOf({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
  })),
}.isRequired;

export default ProductList;
