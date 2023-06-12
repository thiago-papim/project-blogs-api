const Users = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: DataTypes.INTEGER,
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    iamge: DataTypes.STRING,
  });

  return User;
};

module.exports = Users;
