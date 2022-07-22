'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EntrarTurma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // EntrarTurma.belongsTo(models.alunos);
      // EntrarTurma.belongsTo(models.turmas);
    }
  }
  EntrarTurma.init({
    idAluno: DataTypes.INTEGER,
    codigoTurma: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EntrarTurma',
  });
  return EntrarTurma;
};