const productService = require('../services/product.service');

const getAll = async (req, res) => {
  try {
    const allProducts = await productService.getAll();
  return res.status(200).json(allProducts);
  } catch (error) {
    // next(error);
    return res.status(500).json({ error: error.message, stack: error.stack });
  }
};

module.exports = { getAll };