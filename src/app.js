const express = require('express');
const { login } = require('./controllers/Login.controller');
const { userCreate, 
  usersAll, getUserById, deleteUserId } = require('./controllers/User.controller');
const { validateToken } = require('./middlewares/validateToken');
const { categoriesAll, categoriesCreate } = require('./controllers/Category.controller');
const { allPosts, 
  getPostById, 
  deletePost, filterPost, updatePost, newPost } = require('./controllers/Post.controller');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', login);
app.post('/user', userCreate);
app.get('/user', validateToken, usersAll);
app.get('/user/:id', validateToken, getUserById);
app.get('/categories', validateToken, categoriesAll);
app.post('/categories', validateToken, categoriesCreate);
app.get('/post/search', validateToken, filterPost);
app.get('/post', validateToken, allPosts);
app.get('/post/:id', validateToken, getPostById);
app.delete('/post/:id', validateToken, deletePost);
app.delete('/user/me', validateToken, deleteUserId);
app.put('/post/:id', validateToken, updatePost);
app.post('/post', validateToken, newPost);

module.exports = app;
