import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import MainContext from '../Context/MainContext';

function ProductList() {
  const context = useContext(MainContext);
  return (
    <section>
      { context.products?.map((product) => (
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
