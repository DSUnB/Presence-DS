'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EfetuarChamada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // EfetuarChamada.belongsTo(models.turmas);
      // EfetuarChamada.belongsTo(models.chamadas);
    }
  }
  EfetuarChamada.init({
    idChamada: DataTypes.INTEGER,
    codigoTurma: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EfetuarChamada',
  });
  return EfetuarChamada;
};