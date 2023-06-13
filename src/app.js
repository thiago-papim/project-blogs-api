const express = require('express');
const { login } = require('./controllers/Login.controller');
const { userCreate, usersAll, getUserById } = require('./controllers/User.controller');
const { validateToken } = require('./middlewares/validateToken');

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
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
