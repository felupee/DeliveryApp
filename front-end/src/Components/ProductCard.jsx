import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import StorageContext from '../Context/StorageContext';
import Button from './Button';
import Input from './Input';

const NEGATIVE_ONE = -1;

function ProductCard({ product }) {
  const [count, setCount] = React.useState(0);

  const { cartStorage, setCartStorage } = useContext(StorageContext);

  const price = parseFloat(product.price);
  // const total = price * +count;
  const stringifiedPrice = price.toFixed(2).toString().replace('.', ',');

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  // const calculatePrice = () => {
  //   if (count === 0) {
  //     const newPrice = price.toFixed(2).replace('.', ',');
  //     return newPrice;
  //   }

  //   return stringifiedPrice;
  // };

  const createStorageObject = () => {
    const item = {
      id: product.id,
      name: product.name,
      quantity: count,
      price: stringifiedPrice,
    };
    return item;
  };

  useEffect(() => {
    if (count === 0) {
      const filtered = cartStorage.filter((item) => item.name !== product.name);

      setCartStorage(filtered);
    } else {
      const itemIndex = cartStorage.findIndex((item) => item.name === product.name);

      if (itemIndex !== NEGATIVE_ONE) {
        const updatedItem = {
          ...cartStorage[itemIndex],
          quantity: count,
          price: stringifiedPrice,
        };

        const updatedCartStorage = [...cartStorage];

        updatedCartStorage[itemIndex] = updatedItem;

        setCartStorage(updatedCartStorage);
      } else {
        setCartStorage((prev) => [...prev, createStorageObject()]);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const handleQuantityChange = (e) => setCount(e.target.value);

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
        <span>
          {' '}
          {stringifiedPrice}
        </span>
      </p>
      <Button
        symbol="-"
        id={ product.id }
        type="rm"
        onClick={ decrement }
      />
      <Input
        type="number"
        id={ product.id }
        value={ count }
        onChange={ handleQuantityChange }
      />
      <Button
        symbol="+"
        id={ product.id }
        type="add"
        onClick={ increment }
      />
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
