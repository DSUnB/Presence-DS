'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alunos', {
      id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      idAluno: {
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
        onDelete: 'cascade'  //quando apaga um aluno, apaga o usuario dele, evitando registros desnecessários
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
    await queryInterface.dropTable('Alunos');
  }
};