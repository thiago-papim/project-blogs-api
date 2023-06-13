const { User } = require('../models');

const displayValidation = (displayName) => !displayName || displayName.length < 8;
const passwordValidation = (password) => !password || password.length < 6;
const validationEmail = /\S+@\S+\.\S+/;

const createUser = async (user) => {
  const { displayName, email, password, image } = user;
  if (displayValidation(displayName)) {
    return { message: '"displayName" length must be at least 8 characters long', code: 400 };
  }
  if (!validationEmail.test(email)) {
    return { message: '"email" must be a valid email', code: 400 }; 
  }
  if (passwordValidation(password)) {
    return { message: '"password" length must be at least 6 characters long', code: 400 }; 
  }
  const users = await User.findOne({ where: { email } });
  if (users) {
    return { message: 'User already registered', code: 409 };
  }
  await User.create({ displayName, email, password, image });
};

const getAll = async () => {
  const allUsers = await User.findAll();
  const newAllUsers = allUsers.map((e) => {
    const newUser = e;
    newUser.password = undefined;
    return newUser;
  });
  return newAllUsers;
};

const getById = async (id) => {
  try {
    const user = await User.findOne({ where: { id } });
    if (user) {
      user.password = undefined;
    }
    return user || { message: 'User does not exist' };
  } catch (error) {
    return error;
  }
};

module.exports = {
  createUser,
  getAll,
  getById,
};