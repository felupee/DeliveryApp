import React from 'react';
import PropTypes from 'prop-types';

function Button({ symbol, onClick, id, type }) {
  return (
    <button
      data-testid={ `customer_products__button-card-${type}-item-${id}` }
      type="button"
      onClick={ onClick }
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
