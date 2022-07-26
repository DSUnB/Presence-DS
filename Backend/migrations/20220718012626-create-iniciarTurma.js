'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IniciarTurma', {
      id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      codigoTurma: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references:{
          model: 'turmas',
          key: 'codigoTurma'
        },
        onUpdate: 'cascade',  
        onDelete: 'cascade'
      },
      idProfessor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'professores',
          key: 'idProfessor'
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
    await queryInterface.dropTable('IniciarTurma');
  }
};