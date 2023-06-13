const express = require('express');
const { login } = require('./controllers/Login.controller');
const { userCreate, usersAll, getUserById } = require('./controllers/User.controller');
const { validateToken } = require('./middlewares/validateToken');
const { categoriesAll, categoriesCreate } = require('./controllers/Category.controller');

// ...

const app = express();

// não remova ou mova esse endpoint
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
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
