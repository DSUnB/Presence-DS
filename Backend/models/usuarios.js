'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Usuarios.hasMany(models.Professores);
      // Usuarios.hasMany(models.Alunos);
    }
  }
  Usuarios.init({
    matricula: DataTypes.STRING,
    nome: DataTypes.STRING,
    emailInstitucional: DataTypes.STRING,
    senha: DataTypes.STRING,
    tipoUsuario: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};