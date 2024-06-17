const database = require('../models');
const uuid = require('uuid');

class PermissaoService {
  async cadastrar(dto) {
    console.log(dto)
    const permissao = await database.permissoes.findOne({
      where: {
        nome: dto.nome
      }
    });
    if (permissao) {
      throw new Error('Permissão já cadastrada.');
    }
    try {
      const newPermissao = await database.permissoes.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao
      });
      return newPermissao;
    } catch (error) {
      throw new Error('Erro ao cadastrar a permissão.');
    }
  }

  async buscarTodasPermissoes() {
    try {
      const permissoes = await database.permissoes.findAll();
      return permissoes;
    } catch (error) {
      throw new Error('Erro ao buscar todas as permissões.');
    }
  }

  async buscarPermissaoPorId(id) {
    try {
      const permissao = await database.permissoes.findOne({
        where: {
          id: id
        }
      });
      if (!permissao) {
        throw new Error('Permissão não encontrada.');
      }
      return permissao;
    } catch (error) {
      throw new Error('Erro ao buscar permissão.');
    }
  }

  async deletarPermissaoPorId(id) {
    const permissao = await database.permissoes.findOne({
      where: {
        id: id
      }
    });
    if (!permissao) {
      throw new Error('Permissão não encontrada.');
    }
    try {
      await database.permissoes.destroy({
        where: {
          id: id
        }
      });
    } catch (error) {
      throw error;
    }
  }
  async editarPermissao(dto) {
    const permissao = await database.permissoes.findOne({
      where: {
        id: dto.id
      }
    });
    if (!permissao) {
      throw new Error('Permissão não encontrada.');
    }
    try {
      permissao.nome = dto.nome;
      permissao.descricao = dto.descricao;
      await permissao.save();
      return await permissao.reload();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PermissaoService;