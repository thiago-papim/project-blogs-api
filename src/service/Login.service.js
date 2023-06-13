const { User } = require('../models');

const validateUser = async (email, password) => {
  const users = await User.findAll();
  const arrUsers = users
    .find((e) => e.dataValues.email === email && e.dataValues.password === password);
  if (!arrUsers) {
    return { message: 'Invalid fields' };
  }
  return arrUsers;
};

module.exports = {
  validateUser,
};