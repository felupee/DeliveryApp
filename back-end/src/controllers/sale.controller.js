const saleService = require('../services/sale.service');

const create = async (req, res, next) => {
  try {
    const { code, data } = await saleService.create(req.body);
    return res.status(code).json(data);
  } catch (error) {
    // console.log(error.message, 'error');
    next(error);
    // return res.status(500).json({ error: error.message, stack: error.stack });
  }
};

const getCustomerId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { code, data } = await saleService.getCustomerId(id);
    return res.status(code).json(data);
  } catch (error) {
    next(error);
  }
};

const getSaleById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { code, data } = await saleService.getSaleById(id);
    return res.status(code).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = { 
  create,
  getCustomerId,
  getSaleById,
};