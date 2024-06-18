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
}

module.exports = SegurancaController;