const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    displayName: {
      type: DataTypes.STRING,
      field: 'display_name'
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  }
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { 
      foreignKey: 'userId',
      as: 'blogPosts'
    })
  }

  return User;
};

module.exports = User;
