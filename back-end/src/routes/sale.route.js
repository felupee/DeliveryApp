const { Router } = require('express');
const saleController = require('../controllers/sale.controller');
const { auth } = require('../middlewares/auth');

const router = Router();

router.post('/', auth, saleController.create);
router.get('/customer/:id', saleController.getCustomerId);
router.get('/details/:id', saleController.getSaleById);

module.exports = router;
