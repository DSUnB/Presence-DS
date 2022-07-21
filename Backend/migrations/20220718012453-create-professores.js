'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Professores', {
      idProfessor: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matricula: {
        allowNull: false,
        type: Sequelize.STRING,
        references: { //chave estrangeira
          model: 'usuarios',
          key: 'matricula'
        },
        onUpdate: 'cascade',  
        onDelete: 'cascade'  //quando apaga um professor, apaga o usuario dele, evitando registros desnecessários
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
    await queryInterface.dropTable('Professores');
  }
};