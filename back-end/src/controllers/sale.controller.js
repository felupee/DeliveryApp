const saleService = require('../services/sale.service');

const create = async (req, res, next) => {
  try {
    const { code, data } = await saleService.create(req.body);
    return res.status(code).json(data);
  } catch (error) {
    next(error);
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
