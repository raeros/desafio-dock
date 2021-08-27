/* Constants */
const { ACCOUNT_ERROR_HANDLING } = require("@constants/ErrorHandling");

/* Models */
const Account = require("@models/account/AccountModel");
const Transaction = require("@models/transaction/TransactionModel");

/* Account Types */
const { ACCOUNT_TYPES } = require("@constants/App");

/* Helpers */
const ErrorHelper = require("@helpers/Error");

/* Importing Service */
const AccountService = require("@services/account/AccountService");

class AccountDepositService {
    async create(id, deposit){
        const { accountModel } = await this.accountCheckById(id);

        accountModel.saldo += deposit.valor;

        await accountModel.save();
        await this.accountTransactionCreate(id, deposit.valor);

        return { message: "Deposit created sucefully!"};

    }

    async accountCheckById(id){
        const { accountJSON, accountModel } = await new AccountService().getAccountById(id);
        if(!accountJSON || !accountJSON.idConta)
            return ErrorHelper.throw(ACCOUNT_ERROR_HANDLING.ACCOUNT_NOT_FOUND);

        return accountModel;
    }

    async accountTransactionCreate(id, valor){
        return await new TransactionService().create(id, valor);
    }

}

module.exports = AccountDepositService;