const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const includesPost = [
  { 
    model: User,
    as: 'user',
    attributes: ['id', 'displayName', 'email', 'image'],
  },
  {
    model: Category,
    as: 'categories',
    attributes: ['id', 'name'],
    through: { attributes: [] },
  },
];

const getAll = async () => {
  const allPosts = await BlogPost.findAll({
    include: includesPost,
  });
  return allPosts;
};

const getById = async (id) => {
  try {
    const post = await BlogPost.findByPk(id, {
      include: includesPost,
    });
    return post || { message: 'Post does not exist' };
  } catch (error) { return error; }
};

const getFilter = async (textSearch) => {
  const allPosts = await BlogPost.findAll({ where: { [Op.or]: [
        { title: { [Op.like]: `%${textSearch}%` } }, { content: { [Op.like]: `%${textSearch}%` } },
      ] },
    include: includesPost,
  });
  return allPosts;
};

const deleteById = async (id, objToken) => {
  const post = await BlogPost.findByPk(id);
  if (!post) {
    return { message: 'Post does not exist' };
  }
  const { userId } = post;
  if (userId !== objToken.id) {
    return { message: 'Unauthorized user' };
  }
  await BlogPost.destroy({ where: { id } });
};

const updateById = async (idAndBody, objToken) => {
  const { id, title, content } = idAndBody;
  if (!title || !content) {
    return { message: 'Some required fields are missing' };
  }
  const post = await BlogPost.findByPk(id);
  const { userId } = post;
  if (userId !== objToken.id) {
    return { message: 'Unauthorized user' };
  }
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );
  const newPost = await getById(id);
  return newPost;
};

module.exports = {
  getAll,
  getById,
  deleteById,
  getFilter,
  updateById,
};