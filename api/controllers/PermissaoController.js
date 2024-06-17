const PermissaoService = require('../services/PermissaoService');

const permissaoService = new PermissaoService();

class PermissaoController {
  static async cadastrar(req, res) {
    const { nome, descricao } = req.body;
    try {
      const permissao = await permissaoService.cadastrar({ nome, descricao });
      return res.status(201).json({ message: 'Permissão cadastrada com sucesso.', permissao });
    } catch (error) {
      console.log(error)
      return res.status(500).send({ message: error.message });
    }
  }

  static async buscarTodasPermissoes(req, res) {
    try {
      const permissoes = await permissaoService.buscarTodasPermissoes()
      return res.status(200).json({ message: 'Busca por permissões realizada com sucesso.', permissoes });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  static async buscarPermissaoPorId(req, res) {
    try {
      const { id } = req.params
      const permissao = await permissaoService.buscarPermissaoPorId(id)
      return res.status(200).json({ message: 'Permissão buscada com sucesso.', permissao });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  static async deletarPermissaoPorId(req, res) {
    const { id } = req.params
    try {
      await permissaoService.deletarPermissaoPorId(id)
      return res.status(200).send({ message: 'Permissão deletada com sucesso.' })
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  static async editarPermissao(req, res) {
    const { id } = req.params
    const { nome, descricao } = req.body
    try {
      const role = await permissaoService.editarPermissao({ id, nome, descricao })
      return res.status(200).send({ message: 'Permissão editada com sucesso.', role })
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
}

module.exports = PermissaoController;