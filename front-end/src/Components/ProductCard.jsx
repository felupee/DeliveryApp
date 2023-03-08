import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';

function ProductCard({ product }) {
  const [count, setCount] = React.useState(1);

  const price = parseFloat(product.price);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const calculatePrice = () => {
    if (count === 0) {
      return price;
    }

    const total = price * +count;
    return total.toFixed(2).toString().replace('.', ',');
  };

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
        { calculatePrice() }
      </p>
      <Button symbol="-" id={ product.id } type="rm" onClick={ decrement } />
      <Input type="number" id={ product.id } value={ 0 } />
      <Button symbol="+" id={ product.id } type="add" onClick={ increment } />
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

export default ProductCard;
