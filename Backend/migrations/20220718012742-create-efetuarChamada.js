'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EfetuarChamada', {
      idEfetuarChamada: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idChamada: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'chamadas',
          key: 'idChamada'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      codigoTurma: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'turmas',
          key: 'codigoTurma'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EfetuarChamada');
  }
};