const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      this.hasMany(models.Product, { foreignKey: 'category_id' });
      // define association here
    }
  }
  Category.init({
    name: DataTypes.STRING,
    product_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
