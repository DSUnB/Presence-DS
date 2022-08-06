'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Turmas.hasMany(models.EntrarTurma);
      Turmas.hasMany(models.Chamadas);
      Turmas.belongsTo(models.Professores);
    }
  }
  Turmas.init({
    codigoTurma: DataTypes.STRING,
    curso: DataTypes.STRING,
    nomeTurma: DataTypes.STRING,
    idProfessor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};