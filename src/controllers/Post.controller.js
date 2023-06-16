const { getAll, getById,
   deleteById, getFilter, updateById, createPost } = require('../service/Post.service');

const allPosts = async (req, res) => {
  const allUsers = await getAll();
  return res.status(200).json(allUsers);
};

const filterPost = async (req, res) => {
  const textSearch = req.query.q;
  const result = await getFilter(textSearch);
  console.log(result);
  return res.status(200).json(result);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const getPost = await getById(id);
  if (getPost.message) {
    return res.status(404).json({ message: getPost.message });
  }
  res.status(200).json(getPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const objToken = req.user;
  const post = await deleteById(id, objToken);
  if (post && post.message) {
    res.status(post.code).json({ message: post.message });
  }
  return res.status(204).end();
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const objToken = req.user;
  const { title, content } = req.body;
  const idAndBody = { id, title, content };
  const newPost = await updateById(idAndBody, objToken);
  if (newPost && newPost.message) {
    return res.status(newPost.code).json({ message: newPost.message });
  }
  return res.status(200).json(newPost);
};

const newPost = async (req, res) => {
  const objToken = req.user;
  const post = await createPost(req.body, objToken);
  if (post.message) {
    return res.status(400).json({ message: post.message });
  }
  return res.status(201).json(post);
};

module.exports = {
  allPosts,
  getPostById,
  deletePost,
  filterPost,
  updatePost,
  newPost,
};