'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Professores.belongsTo(models.Usuarios);
      Professores.hasMany(models.Turmas);
  }
  }
  Professores.init({
    idProfessor: DataTypes.INTEGER,
    matricula: DataTypes.STRING,
    UsuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Professores',
  });
  return Professores;
};