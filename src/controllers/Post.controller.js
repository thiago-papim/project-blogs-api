const { getAll, getById } = require('../service/Post.service');

const allPosts = async (req, res) => {
  const allUsers = await getAll();
  return res.status(200).json(allUsers);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const getPost = await getById(id);
  if (getPost.message) {
    return res.status(404).json({ message: getPost.message });
  }
  res.status(200).json(getPost);
};

module.exports = {
  allPosts,
  getPostById,
};