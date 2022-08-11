'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alunos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Alunos.belongsTo(models.Usuarios);
      // Alunos.hasMany(models.EntrarTurma);
      // Alunos.hasMany(models.ResponderChamada);
    }
  }
  Alunos.init({
    idAluno: DataTypes.INTEGER,
    matricula: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Alunos',
  });
  return Alunos;
};