const SegurancaService = require('../services/SegurancaService');

const segurancaService = new SegurancaService();

class SegurancaController {
  static async cadastrarACL(req, res) {
    const { roles, permissoes } = req.body;
    const { usuarioId } = req;

    try {
      const acl = await segurancaService.cadastrarACL({ roles, permissoes, usuarioId });
      return res.status(201).json({ message: 'ACL cadastrado com sucesso.', acl })
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  static async cadastrarPermissoesRoles(req, res) {
    const { roleId, permissoes } = req.body;
    console.log(roleId)
    try {
      const permissoesRole = await segurancaService.cadastrarPermissoesRoles({ roleId, permissoes });
      return res.status(201).json({ message: 'Permissões cadastradas com sucesso. ', permissoesRole })
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
}

module.exports = SegurancaController;