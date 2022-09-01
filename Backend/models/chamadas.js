'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chamadas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Chamadas.hasMany(models.ResponderChamada);
      // Chamadas.belongsTo(models.Turmas);
    }
  }
  Chamadas.init({
    codigoChamada: DataTypes.STRING,
    codigoTurma: DataTypes.STRING,
    dia: DataTypes.INTEGER,
    mes: DataTypes.STRING,
    ano: DataTypes.STRING,
    situation: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Chamadas',
  });
  return Chamadas;
};