import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './ProductList.css';
import MainContext from '../Context/MainContext';

function ProductList() {
  const { products } = useContext(MainContext);
  return (
    <section className="product-container">
      { products?.map((product) => (
        <div key={ product.id } className="product-card">
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
