'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResponderChamadas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // ResponderChamada.belongsTo(models.Alunos);
      // ResponderChamada.belongsTo(models.Chamadas);
      
    }
  }
  ResponderChamadas.init({
    idAluno: DataTypes.INTEGER,
    codigoChamada: DataTypes.STRING,
    codigoTurma: DataTypes.STRING,
    aluno: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ResponderChamadas',
  });
  return ResponderChamadas;
};