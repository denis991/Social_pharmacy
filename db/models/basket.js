const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate(models) {
      // define association here
    }
  }
  Basket.init({
    productBas_id: DataTypes.INTEGER,
    usesBas_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
