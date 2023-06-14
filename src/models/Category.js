const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'categories',
    underscored: true,
  }
  );

  Category.associate = (models) => {
    Category.belongsToMany(models.BlogPost, 
      { through: 'PostCategory', as: 'categories', foreignKey: 'categoryId' });
  }


  return Category;
};

module.exports = Category;
