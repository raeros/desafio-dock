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
const TransactionService = require("@services/account/AccountTransactionService");


class AccountDepositService {
    async create(id, deposit){

        const account= await this.accountCheckById(id);

        const balance = parseFloat(account.saldo);
        account.saldo = parseFloat(deposit.valor) + balance;

        await account.save();
        await this.accountTransactionCreate(id, deposit.valor);

        return { message: "Deposit created sucefully!"};

    }

    async accountCheckById(id){
        const accountService = new AccountService();
        const { account } = await accountService.getAccountById(id);

        return account;
    }

    async accountTransactionCreate(id, valor){
        return await new TransactionService().create(id, valor);
    }

}

module.exports = AccountDepositService;