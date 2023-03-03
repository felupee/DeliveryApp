const { Router } = require('express');
const productController = require('../controllers/product.controllers');

const router = Router();

router.get('/', productController.getAll);

module.exports = router;
