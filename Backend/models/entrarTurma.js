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
      // EntrarTurma.belongsTo(models.Alunos);
      // EntrarTurma.belongsTo(models.Turmas);
    }
  }
  EntrarTurmas.init({
    idAluno: DataTypes.INTEGER,
    codigoTurma: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EntrarTurmas',
  });
  return EntrarTurmas;
};