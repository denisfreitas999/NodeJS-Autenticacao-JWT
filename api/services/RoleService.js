const database = require('../models');
const uuid = require('uuid');

class RoleService {
  async cadastrar(dto) {
    const role = await database.roles.findOne({
      where: {
        nome: dto.nome
      }
    });
    if (role) {
      throw new Error('Role já cadastrada.');
    }
    try {
      const newRole = await database.roles.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao
      });

      return newRole;
    } catch (error) {
      throw new Error('Erro ao cadastrar role.');
    }
  }

  async buscarTodasRoles() {
    try {
      const roles = await database.roles.findAll();
      return roles;
    } catch (error) {
      throw new Error('Erro ao buscar todas as roles.');
    }
  }

  async buscarRolePorId(id) {
    try {
      const role = await database.roles.findOne({
        where: {
          id: id
        }
      })
      return role;
    } catch (error) {
      throw new Error('Erro ao buscar a role.');
    }
  }

  async deletarRolePorId(id) {
    try {
      await database.roles.destroy({
        where: {
          id: id
        }
      });
    } catch (error) {
      throw new Error('Erro ao deletar a role.');
    }
  }

  async editarRole(dto) {
    try {
      const { id, nome, descricao } = dto;
      const role = await database.roles.findOne({
        where: {
          id: id
        }
      });

      if (!role) {
        throw new Error('Role não encontrada.');
      }

      role.nome = nome;
      role.descricao = descricao;
      await role.save();
      return await role.reload();

    } catch (error) {
      throw new Error('Erro ao atualizar Role.');
    }
  }
}

module.exports = RoleService;