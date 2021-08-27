/* Importing Dependencies */
const moment = require("moment");

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


class AccountWithdrawalService {
    async create(id, deposit){

        const account= await this.accountCheckById(id);

        const balance = parseFloat(account.saldo);
        account.saldo = balance - parseFloat(deposit.valor);

        const dailyWithdrawal = this.accountCheckDailyWithdrawal(1, 1);
        // await account.save();
        // await this.accountTransactionCreate(id, deposit.valor);

        return { message: "Deposit created sucefully!", data: dailyWithdrawal};

    }

    async accountCheckBalanceAvailable(withdrawalValue){}

    async accountCheckDailyWithdrawal(newBalance, account){
        const today = moment().locale("pt-BR").format("YYYY-MM-DD");
        console.log(today);
        const transactionService = new TransactionService();
        const dailyTransactionWithDrawal = await transactionService.getWithdrawalTransactionByDay(1, today);
        console.log("\n\n\n\n\n\n");
        console.log(dailyTransactionWithDrawal);
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

module.exports = AccountWithdrawalService;