const joi = require('joi');

const saleSchema = joi.object({
  userId: joi.number().required(),
  sellerId: joi.number().required(),
  totalPrice: joi.number().positive().required(),
  deliveryAddress: joi.string().min(5).required(),
  deliveryNumber: joi.number().required(),
  // data tem que ser gerada automaticamente pelo banco
  status: joi.string(),
  saleProductList: joi.array().items({
    productId: joi.number().required(),
    quantity: joi.number().required(),
  }),
});

module.exports = { saleSchema };