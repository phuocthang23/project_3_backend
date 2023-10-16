"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      // Orders.belongsTo(models.Addresses, {
      //   foreignKey: "addressId",
      //   targetKey: "id",
      //   as: "address",
      // });
      // Orders.belongsTo(models.Payments, {
      //   foreignKey: "paymentId",
      //   targetKey: "id",
      //   as: "payments",
      // });
      // Orders.hasMany(models.OrderItems, {
      //   foreignKey: "orderId",
      //   targetKey: "orderId",
      //   as: "orderItems",
      // });
    }
  }
  Orders.init(
    {
      userId: DataTypes.INTEGER,
      addressId: DataTypes.INTEGER,
      paymentId: DataTypes.INTEGER,
      total: DataTypes.BIGINT,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
