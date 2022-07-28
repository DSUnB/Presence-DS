'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RealizarChamada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RealizarChamada.belongsTo(models.Professores);
      RealizarChamada.belongsTo(models.Chamadas);
    }
  }
  RealizarChamada .init({
    idChamada: DataTypes.INTEGER,
    idProfessor: DataTypes.INTEGER,
    codigoTurma: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RealizarChamada ',
  });
  return RealizarChamada ;
};