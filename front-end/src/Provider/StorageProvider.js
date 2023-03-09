import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage';
import StorageContext from '../Context/StorageContext';

function StorageProvider({ children }) {
  const [cartStorage, setCartStorage] = useLocalStorage('cart', []);

  const context = useMemo(() => ({
    cartStorage,
    setCartStorage,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [cartStorage]);

  return (
    <StorageContext.Provider value={ context }>
      {children}
    </StorageContext.Provider>
  );
}

StorageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StorageProvider;
