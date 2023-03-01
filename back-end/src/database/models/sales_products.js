'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sales_products extends Model {}
  
  Sales_products.init({
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sales_products',
  });

  Sales_products.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
       as: 'Sales',
       through: Sales_products, 
       foreignKey: 'saleId', 
       otherKey: 'productId',
      });

    models.Products.belongsToMany(models.Sales, {
      as: 'Products',
      through: Sales_products, 
      foreignKey: 'productId', 
      otherKey: 'saleId',
      }); 
  };

  return Sales_products;
};