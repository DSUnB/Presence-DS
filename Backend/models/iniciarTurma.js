'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IniciarTurma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      IniciarTurma.belongsTo(models.Professores);
      IniciarTurma.belongsTo(models.Turmas);
    }
  }
  IniciarTurma.init({
    codigoTurma: DataTypes.STRING,
    idProfessor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'IniciarTurma',
  });
  return IniciarTurma;
};