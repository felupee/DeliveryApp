const express = require('express');
const cors = require('cors');
const loginRoute = require('../routes/login.route');
const registerRoute = require('../routes/register.route');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRoute);
app.use('/register', registerRoute);

module.exports = app;
