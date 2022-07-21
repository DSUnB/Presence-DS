'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EntrarTurma', {
      idEntrarTurma: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idAluno: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'alunos',
          key: 'idAluno'
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
    await queryInterface.dropTable('EntrarTurma');
  }
};