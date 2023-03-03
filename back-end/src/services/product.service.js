const { Products } = require('../database/models');

const getAll = async () => {
  const allProducts = await Products.findAll();
  return allProducts;
};

module.exports = { getAll };