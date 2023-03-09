'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalesProducts extends Model {}
  
  SalesProducts.init({
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    // modelName: 'SalesProducts',
    tableName: 'sales_products',
    underscored: true,
    timestamps: false,
  });

  SalesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
       as: 'products',
       through: SalesProducts, 
       foreignKey: 'saleId', 
       otherKey: 'productId', 
      });

    models.Products.belongsToMany(models.Sales, {
      as: 'sales',
      through: SalesProducts, 
      foreignKey: 'productId', 
      otherKey: 'saleId',
      }); 
  };

  return SalesProducts;
};