const { Category } = require('../models');

const createCategory = async (name) => {
  if (!name) {
    return { message: '"name" is required', code: 400 };
  }
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getAll = async () => {
  const allcategories = await Category.findAll();
  return allcategories;
};

module.exports = {
  createCategory,
  getAll,
};