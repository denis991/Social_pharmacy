const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    static associate(models) {
      // define association here
    }
  }
  Stock.init(
    {
      name: DataTypes.STRING,
      date_start: DataTypes.DATE,
      date_finish: DataTypes.DATE,
      product_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Stock',
    },
  );
  return Stock;
};
