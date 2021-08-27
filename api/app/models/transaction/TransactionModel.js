/* Importing dependencies */
const Sequelize = require("sequelize");
const db = require("../../../database");

const TransactionModel = db.define("Transaction", {
    idTransacao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    valor: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false
    },
    created_at: {
        field: 'dataTransacao',
        type: Sequelize.DATE
    },
    updated_at: {
        field: 'dataAtualizacao',
        type: Sequelize.DATE
    }
});

module.exports = TransactionModel;