const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/:id', userCtrl.deleteAccount);
router.get('/:id', userCtrl.getOneAccount);
router.get('/accounts', userCtrl.getAllAccounts);


module.exports = router;