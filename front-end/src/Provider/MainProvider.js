import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../Context/MainContext';
import useLocalStorage from '../hooks/useLocalStorage';
import api from '../api';

function MainProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [storageData, setStorageData] = useLocalStorage('user', '');

  const isEmailValid = (em) => /\S+@\S+\.\S+/.test(em);

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data);
    }).catch((error) => {
      console.log(error.message);
    });
  }, []);

  const value = useMemo(() => ({
    users,
    setUsers,
    products,
    setProducts,
    storageData,
    setStorageData,
    isEmailValid,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [users, products, storageData]);

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
