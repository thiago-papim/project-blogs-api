const { validateUser } = require('../service/Login.service');
const { tokenGenerate } = require('../utils/JWT');

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  const validateEmailPassword = await validateUser(email, password);
  if (validateEmailPassword.message) {
    console.log('oi');
    return res.status(400).json(validateEmailPassword);
  }
  const token = tokenGenerate(email);
  return res.status(200).json({ token });
};

module.exports = {
  login,
};