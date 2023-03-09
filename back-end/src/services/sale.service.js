const { Sequelize } = require('sequelize');
const { Sales, SalesProducts, User, Products } = require('../database/models');
const { validateBody } = require('../utils/validations/validateBody');
const { saleSchema } = require('../schemas/sale');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);
const create = async (saleData) => {
  validateBody(saleData, saleSchema);
  const sale = { userId: saleData.userId,
    sellerId: saleData.sellerId,
    totalPrice: saleData.totalPrice,
    deliveryAddress: saleData.deliveryAddress,
    deliveryNumber: saleData.deliveryNumber,
    status: saleData.status,
  };
    const result = await sequelize.transaction(async (t) => {
      const newSale = await Sales.create(sale, { transaction: t });
      const saleProductListWithSaleId = saleData.saleProductList.map((product) => ({
        ...product,
        saleId: newSale.dataValues.id,
      }));
      await SalesProducts.bulkCreate(saleProductListWithSaleId, { transaction: t });
      return { code: 201, data: newSale.dataValues.id };
    });
    return result;
};

const getCustomerId = async (userId) => {
  const salesByUser = await Sales.findAll({ where: { userId } });
  return { code: 200, data: salesByUser };
}; 

const getSaleById = async (saleId) => {
  const sale = await Sales.findOne({
    where: { id: saleId },
    include: [
      { model: User,
        as: 'seller',
        attributes: ['name'] },
      {
        model: Products,
        as: 'products',
        attributes: ['name', 'price'],
      },
    ],
  });
  return { code: 200, data: sale };
};

module.exports = { 
  create,
  getCustomerId,
  getSaleById,
};
