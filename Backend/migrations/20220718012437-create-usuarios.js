'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      matricula: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      emailInstitucional: {
        allowNull: false,
        type: Sequelize.STRING
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tipoUsuario: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
    queryInterface.sequelize.query('CREATE TRIGGER `usuarios_AFTER_INSERT` AFTER INSERT ON `usuarios` FOR EACH ROW BEGIN if new.tipoUsuario = 0 then insert into alunos values(null, 0, new.matricula,now(), now(), null); else  insert into professores values(null, 0, new.matricula,now(), now(), null); end if; END');
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};