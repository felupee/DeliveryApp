import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, value, onChange, name }) {
  return (
    <input
      type={ type }
      name={ name }
      value={ value }
      onChange={ onChange }
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  id: PropTypes.number,
}.isRequired;

export default Input;
