const Router = require('express');
const SegurancaController = require('../controllers/SegurancaController');

const router = Router();

router
  .post('/seguranca/acl', SegurancaController.cadastrarACL);

module.exports = router;