const { getAll, createCategory } = require('../service/Category.service');

const categoriesCreate = async (req, res) => {
  const { name } = req.body;
  const categoryValidation = await createCategory(name);
  if (categoryValidation && categoryValidation.message) { 
    return res.status(categoryValidation.code).json({ message: categoryValidation.message }); 
  }
  return res.status(201).json(categoryValidation);
};

const categoriesAll = async (req, res) => {
  const allcategoryes = await getAll();
  return res.status(200).json(allcategoryes);
};

module.exports = {
  categoriesCreate,
  categoriesAll,
};