const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.belongsTo(models.User, { through: models.Basket, foreignKey: 'category_id' });
      this.hasMany(models.Stock, { foreignKey: 'product_id' });
      this.hasMany(models.Discount, { foreignKey: 'product_id' });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    describe: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
