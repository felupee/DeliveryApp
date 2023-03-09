'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {}

  Sales.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: false,
    sequelize,
    tableName: 'sales',
    underscored: true
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.User, 
      { as: 'user', foreignKey: 'userId' },
      );
      Sales.belongsTo(models.User, 
        { as: 'seller', foreignKey: 'sellerId' },
      );
    // Sales.hasMany(models.SalesProducts, 
    //   { as: 'salesProducts', foreignKey: 'saleId'
    // });
    
  };

  return Sales;
};