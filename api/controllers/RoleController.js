const RoleService = require('../services/RoleService');
const roleService = new RoleService();

class RoleController {
  static async cadastrar(req, res) {
    const { nome, descricao } = req.body;
    try {
      const role = await roleService.cadastrar({ nome, descricao });
      return res.status(201).send({ message: 'Role criada com sucesso.', role });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  }

  static async buscarTodasRoles(req, res) {
    try {
      const roles = await roleService.buscarTodasRoles();
      return res.status(200).json({ message: 'Roles buscadas com sucesso.', roles });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  static async buscarRolePorId(req, res) {
    try {
      const { id } = req.params;
      const role = await roleService.buscarRolePorId(id);
      return res.status(200).json({ message: 'Role buscada com sucesso.', role });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  static async deletarRolePorId(req, res) {
    try {
      const { id } = req.params;
      await roleService.deletarRolePorId(id);
      return res.status(200).send({ message: 'Role deletada com sucesso.' });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  static async editarRole(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao } = req.body;
      const role = await roleService.editarRole({ id, nome, descricao });
      return res.status(200).json({ message: 'Role atualizada com sucesso.', role });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
}

module.exports = RoleController;