/* Constants */
const { ACCOUNT_ERROR_HANDLING } = require("@constants/ErrorHandling");

/* Helpers */
const ErrorHelper = require("@helpers/Error");

/* Importing Service */
const AccountService = require("@services/account/AccountService");
const TransactionService = require("@services/account/AccountTransactionService");


class AccountWithdrawalService {
    async create(id, withdrawal){

        const account= await this.accountCheckById(id);

        await this.accountCheckWithdrawal(withdrawal.valor, account);

        const balance = parseFloat(account.saldo);
        account.saldo = balance - parseFloat(withdrawal.valor);

        await account.save();
        await this.accountTransactionCreate(id, parseFloat(`-${withdrawal.valor}`));

        return { message: "Withdrawal created successfully!"};

    }


    async accountCheckWithdrawal(withdrawalValue, account){
       
        const transactionService = new TransactionService();
        const dailyTransactionWithDrawal = await transactionService.getTodayWithdrawalTransaction(account.idConta);
      
        const withdrawalDailySum = this.accountWithdrawalSum(dailyTransactionWithDrawal);

        const withdrawalProjected = Math.abs(withdrawalValue) + Math.abs(withdrawalDailySum);

        this.isAccountBalanceLimitWithdrawal(account, withdrawalProjected);
        this.isAccountBalanceAvailableWithdrawal(account, withdrawalValue);
        
    }

    async accountCheckById(id){
        const accountService = new AccountService();
        const { account } = await accountService.getAccountById(id);

        return account;
    }

    async accountTransactionCreate(id, valor){
        return await new TransactionService().create(id, valor);
    }

    accountWithdrawalSum(withdrawal){
        return withdrawal.reduce((total, value) => total + parseFloat(value.valor), 0);
    }
    
    isAccountBalanceAvailableWithdrawal(account, withdrawalValue){
        console.log(`\n\n\n saldo em conta.. ${account.saldo}, ${withdrawalValue}`);
        if(withdrawalValue > account.saldo)
            return ErrorHelper.throw(ACCOUNT_ERROR_HANDLING.ACCOUNT_BALANCE_NOT_SUFFICIENT);
    }

    isAccountBalanceLimitWithdrawal(account, withdrawalProjected){
        console.log(`\n\n\n limite diario.. ${account.limiteSaqueDiario}, ${withdrawalProjected}`);
        if(withdrawalProjected > account.limiteSaqueDiario)
            return ErrorHelper.throw(ACCOUNT_ERROR_HANDLING.ACCOUNT_BALANCE_LIMIT_WITHDRAWAL);
    }

}

module.exports = AccountWithdrawalService;