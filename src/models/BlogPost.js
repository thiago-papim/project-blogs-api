const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }
  ,
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { 
      foreignKey: 'userId',
      as: 'user'
    })
    BlogPost.belongsToMany(models.Category, { through: 'PostCategory', as: 'categories', foreignKey: 'postId' });
  }

  return BlogPost;
};

module.exports = BlogPost;
