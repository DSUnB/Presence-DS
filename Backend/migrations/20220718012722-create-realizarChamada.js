'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RealizarChamada', {
      idChamada: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'chamadas',
          key: 'idChamada'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      idProfessor: {
        allowNull: false,
        primaryKey: true,
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
    await queryInterface.dropTable('RealizarChamada');
  }
};