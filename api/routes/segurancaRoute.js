const Router = require('express');
const SegurancaController = require('../controllers/SegurancaController');

const router = Router();

router
  .post('/seguranca/acl', SegurancaController.cadastrarACL)
  .post('/seguranca/permissoes-roles', SegurancaController.cadastrarPermissoesRoles);

module.exports = router;