import React from 'react';
import PropTypes from 'prop-types';

const rmItem = -1;
const addItem = 1;

function Button({ symbol, onClick, id, type }) {
  const handleClick = () => {
    if (type === 'add') return onClick(id, addItem);
    if (type === 'rm') return onClick(id, rmItem);
  };

  return (
    <button
      data-testid={ `customer_products__button-card-${type}-item-${id}` }
      type="button"
      onClick={ handleClick }
    >
      {symbol}
    </button>
  );
}

Button.propTypes = {
  symbol: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.number,
  type: PropTypes.string,
}.isRequired;

export default Button;
