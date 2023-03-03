const express = require('express');
const loginRoute = require('../routes/login.route');
const productRoute = require('../routes/product.route');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRoute);
app.use('/products', productRoute);

module.exports = app;
