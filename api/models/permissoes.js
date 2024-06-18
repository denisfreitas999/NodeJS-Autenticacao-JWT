'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class permissoes extends Model {
    static associate(models) {
      permissoes.belongsToMany(models.usuarios, {
        through: models.usuarios_permissoes,
        as: 'permissoes_do_usuario',
        foreignKey: 'permissoes_id'
      });
      permissoes.belongsToMany(models.roles, {
        through: models.roles_permissoes,
        as: 'permissoes_das_roles',
        foreignKey: 'permissoes_id'
      });
    }
  }
  permissoes.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'permissoes',
  });
  return permissoes;
};