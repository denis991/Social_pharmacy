this.belongsTo(models.User, { through: models.Likes, foreignKey: 'category_id' });
в продуктах
