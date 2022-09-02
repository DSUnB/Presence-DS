'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ResponderChamadas', {
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
      codigoChamada: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model: 'chamadas',
          key: 'codigoChamada'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      codigoTurma: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      aluno: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('ResponderChamadas');
  }
};