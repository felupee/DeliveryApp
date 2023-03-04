const express = require('express');
const cors = require('cors');
const loginRoute = require('../routes/login.route');
const productRoute = require('../routes/product.route');
const registerRoute = require('../routes/register.route');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRoute);
app.use('/products', productRoute);
app.use('/register', registerRoute);

app.use('/images', express.static('public/images'));

module.exports = app;
