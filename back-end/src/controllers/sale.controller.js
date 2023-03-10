const saleService = require('../services/sale.service');

const create = async (req, res, next) => {
  try {
    const { code, data } = await saleService.create(req.body);
    return res.status(code).json({ id: data });
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

const getSellerId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { code, data } = await saleService.getSellerId(id);
    return res.status(code).json(data);
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res) => {
  const { code, data } = await saleService.getAll();

  return res.status(code).json(data);
}

module.exports = { 
  create,
  getCustomerId,
  getSaleById,
  getSellerId,
  getAll
};
