import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../Context/MainContext';

function MainProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const isEmailValid = (em) => /\S+@\S+\.\S+/.test(em);

  const value = useMemo(() => ({
    users,
    setUsers,
    products,
    setProducts,
    isEmailValid,
  }), [users, products]);

  return (
    <MainContext.Provider value={ value }>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainProvider;
