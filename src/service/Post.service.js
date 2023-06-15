const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const getAll = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
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
    ],
  });
  return allPosts;
};

const getById = async (id) => {
  try {
    const post = await BlogPost.findByPk(id, {
      include: [
        { 
          model: User,
          as: 'user',
          attributes: ['id', 'displayName', 'email', 'image'],
        }, {
          model: Category,
          as: 'categories',
          attributes: ['id', 'name'],
          through: { attributes: [] },
        },
      ],
    });
    return post || { message: 'Post does not exist' };
  } catch (error) { return error; }
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

const getFilter = async (textSearch) => {
  const allPosts = await BlogPost.findAll({ where: { [Op.or]: [
        { title: { [Op.like]: `%${textSearch}%` } }, { content: { [Op.like]: `%${textSearch}%` } },
      ] },
    include: [
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
    ],
  });
  return allPosts;
};

module.exports = {
  getAll,
  getById,
  deleteById,
  getFilter,
};