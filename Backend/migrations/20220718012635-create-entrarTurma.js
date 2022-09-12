'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EntrarTurmas', {
      id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      idAluno: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'alunos',
          key: 'idAluno'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      codigoTurma: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model: 'turmas',
          key: 'codigoTurma'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      curso: {
        allowNull: true,
        type: Sequelize.STRING
      },
      nomeTurma: {
        allowNull: true,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('EntrarTurmas');
  }
};