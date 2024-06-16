const UsuarioService = require("../services/UsuarioService");

const usuarioService = new UsuarioService();

class UsuarioController {
  static async cadastrar(req, res) {
    const { nome, email, senha } = req.body;
    try {
      if (!nome || !email || !senha) {
        throw new Error('Preencha todos os campos.');
      }
      const usuario = await usuarioService.cadastrar({ nome, email, senha });

      res.status(201).send(usuario);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  static async buscarTodosUsuarios(req, res) {
    try {
      const usuarios = await usuarioService.buscarTodosUsuarios();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  static async buscarUsuarioPorId(req, res) {
    const { id } = req.params;
    try {
      if (!id) {
        throw new Error('O parâmetro de id não foi fornecido.');
      }
      const usuario = await usuarioService.buscarUsuarioPorId(id);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  static async editarUsuario(req, res) {
    const { id } = req.params;
    const { nome, email } = req.body;
    try {
      const usuarioAtualizado = await usuarioService.editarUsuario({ id, nome, email });
      res.status(200).json(usuarioAtualizado);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  static async deletarUsuario(req, res) {
    const { id } = req.params;
    try {
      const usuarioDeletado = await usuarioService.deletarUsuario(id);
      res.status(200).send({ message: 'Usuário deletado com sucesso.' });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}

module.exports = UsuarioController;