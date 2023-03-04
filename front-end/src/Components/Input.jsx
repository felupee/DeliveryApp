import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, value, onChange, id }) {
  return (
    <input
      data-testid={ `customer_products__input-card-quantity-${id}` }
      type={ type }
      value={ value }
      onChange={ onChange }
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  id: PropTypes.number,
}.isRequired;

export default Input;
