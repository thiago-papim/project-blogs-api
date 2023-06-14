const { BlogPost, User, Category } = require('../models');

const getAll = async () => {
  const allUsers = await BlogPost.findAll({
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
  return allUsers;
};

const getById = async (id) => {
  try {
    const user = await BlogPost.findByPk(id, {
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
    console.log(user);
    return user || { message: 'Post does not exist' };
  } catch (error) { return error; }
};

module.exports = {
  getAll,
  getById,
};