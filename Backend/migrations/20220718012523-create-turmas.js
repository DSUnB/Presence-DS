'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Turmas', {
      id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      codigoTurma: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      curso: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nomeTurma: {
        allowNull: false,
        type: Sequelize.STRING
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
      },
      UsuarioId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Turmas');
  }
};