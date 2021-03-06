/* Importing dependencies */
const Sequelize = require("sequelize");
const db = require("../../../database");

const PersonModel = db.define("Person", {
    idPessoa: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.TEXT,
        allowNull: false        
    },
    cpf: {
        type: Sequelize.TEXT,
        allowNull: false  
    },
    dataNascimento: {
        type: Sequelize.DATE,
        allowNull: false  
    },
    created_at: {
        field: 'dataCriacao',
        type: Sequelize.DATE
    },
    updated_at: {
        field: 'dataAtualizacao',
        type: Sequelize.DATE
    }
}
);

module.exports = PersonModel;