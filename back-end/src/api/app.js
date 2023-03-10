const express = require('express');
const cors = require('cors');
require('express-async-errors');
const loginRoute = require('../routes/login.route');
const productRoute = require('../routes/product.route');
const registerRoute = require('../routes/register.route');
const adminRoute = require('../routes/admin.route');
const saleRoute = require('../routes/sale.route');

const { errorMiddleware } = require('../middlewares/errorMiddleware');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRoute);
app.use('/products', productRoute);
app.use('/register', registerRoute);
app.use('/admin/manage', adminRoute);
app.use('/customer/checkout', saleRoute);

app.use('/images', express.static('public/images'));
app.use(errorMiddleware);

module.exports = app;
