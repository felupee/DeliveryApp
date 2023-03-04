const { Router } = require('express');

const adminController = require('../controllers/admin.controller');

const router = Router();

router.post('/', adminController.postUser);

module.exports = router;
