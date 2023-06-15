const { User } = require('../models');

const validateUser = async (email, password) => {
  const arrUsers = await User.findAll();
  const user = arrUsers
    .find((e) => e.dataValues.email === email && e.dataValues.password === password);
  if (!user) {
    return { message: 'Invalid fields' };
  }
  return user;
};

module.exports = {
  validateUser,
};