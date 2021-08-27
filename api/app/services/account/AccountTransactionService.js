/* Constants */
const { ACCOUNT_ERROR_HANDLING } = require("@constants/ErrorHandling");

/* Models */
const Transaction = require("@models/transaction/TransactionModel");

/* Helpers */
const ErrorHelper = require("@helpers/Error");

class AccountTransactionService {
    async create(id, valor){
       return await Transaction.create({
                    idConta: id,
                    valor: valor,
                    created_at: new Date(),
                    updated_at: new Date()
                });

    }

}

module.exports = AccountTransactionService;