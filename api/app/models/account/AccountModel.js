/* Importing dependencies */
const Sequelize = require("sequelize");
const db = require("../../../database");

/* Importing Models */
const PersonModel = require("@models/person/PersonModel");
const TransactionModel = require("@models/transaction/TransactionModel");

const AccountModel = db.define("Account", {
    idConta: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    saldo: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false  
    },
    limiteSaqueDiario: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false  
    },
    flagAtivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    tipoConta: {
        type: Sequelize.INTEGER,
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
});

AccountModel.belongsTo(PersonModel, { foreignKey: "idPessoa"});
AccountModel.hasMany(TransactionModel, { foreignKey: "idConta"});

module.exports = AccountModel;