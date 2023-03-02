import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../Context/MainContext';
import useLocalStorage from '../hooks/useLocalStorage';

function MainProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});
  const [storageData, setStorageData] = useLocalStorage('user', {});

  const isEmailValid = (em) => /\S+@\S+\.\S+/.test(em);

  const value = useMemo(() => ({
    users,
    setUsers,
    products,
    setProducts,
    storageData,
    setStorageData,
    user,
    setUser,
    isEmailValid,
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
