'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Chamadas', {
      id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      codigoChamada: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      codigoTurma: {
        allowNull: false,
        type: Sequelize.STRING,
        references:{
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
    await queryInterface.dropTable('Chamadas');
  }
};