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
    }
}
);

module.exports = PersonModel;