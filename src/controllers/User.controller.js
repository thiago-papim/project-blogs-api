const { createUser } = require('../service/User.service');
const { tokenGenerate } = require('../utils/JWT');

const user = async (req, res) => {
  const userValidation = await createUser(req.body);
  if (userValidation && userValidation.message) { 
    return res.status(userValidation.code).json({ message: userValidation.message }); 
  }
  const { email } = req.body;
  const token = tokenGenerate(email);
  return res.status(201).json({ token });
};

module.exports = {
  user,
};