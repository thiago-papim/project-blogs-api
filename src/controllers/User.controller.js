const { createUser, getAll, getById, deleteUser } = require('../service/User.service');
const { tokenGenerate } = require('../utils/JWT');

const userCreate = async (req, res) => {
  const userValidation = await createUser(req.body);
  if (userValidation && userValidation.message) { 
    return res.status(userValidation.code).json({ message: userValidation.message }); 
  }
  const { email } = req.body;
  const token = tokenGenerate(email);
  return res.status(201).json({ token });
};

const usersAll = async (req, res) => {
  const allUsers = await getAll();
  return res.status(200).json(allUsers);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const getUser = await getById(id);
  if (getUser.message) {
    return res.status(404).json({ message: getUser.message });
  }
  res.status(200).json(getUser);
};

const deleteUserId = async (req, res) => {
  const { id } = req.user;
  await deleteUser(id);
  return res.status(204).json({ message: 'apagado' });
};

module.exports = {
  userCreate,
  usersAll,
  getUserById,
  deleteUserId,
};