const Sequelize = require('sequelize');
const sequelize = require("..database/database");

const Cadastro = sequelize.define("spoiler", {
    id: {
        allowNull:false,
        autoIncrement: true,
        primarykey: true,
        type: Sequelize.INTEGER
    },
    aluno: {
        allowNull:false,
        type: Sequelize.STRING(50),
        validate: {
            len:[2,50]
        }
    }, 
    disciplina: {
        allowNull:false,
        type: Sequelize.STRING(50),
        validate: {
            len:[2,50]
        }
    },
    descricao: {
        allowNull:false,
        type: Sequelize.STRING(50),
        validate: {
            len:[2,50]
        }
    }
});

module.exports = Cadastro;