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
      // IniciarTurma.belongsTo(models.professores);
      // IniciarTurma.belongsTo(models.turmas);
    }
  }
  IniciarTurma.init({
    idProfessor: DataTypes.INTEGER,
    codigoTurma: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'IniciarTurma',
  });
  return IniciarTurma;
};