'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EntrarTurmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EntrarTurmas.belongsTo(models.Alunos, {
        foreignKey: 'idAluno'
      });
      EntrarTurmas.belongsTo(models.Turmas, {
        foreignKey: 'codigoTurma'
      });
    }
  }
  EntrarTurmas.init({
    idAluno: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    codigoTurma: DataTypes.STRING,
    curso: DataTypes.STRING,
    nomeTurma: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'EntrarTurmas',
  });
  return EntrarTurmas;
};