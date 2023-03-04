import React from 'react';
import PropTypes from 'prop-types';

function Button({ symbol, onClick }) {
  return (
    <button type="button" onClick={ onClick }>{symbol}</button>
  );
}

Button.propTypes = {
  symbol: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default Button;
