/* Constants */
const { ACCOUNT_ERROR_HANDLING } = require("@constants/ErrorHandling");

/* Models */
const Account = require("@models/account/AccountModel");

/* Account Types */
const { ACCOUNT_TYPES } = require("@constants/App");

/* Helpers */
const ErrorHelper = require("@helpers/Error");

/* Importing Service */
const AccountService = require("@services/account/AccountService");

class AccountBalanceService {
    async getAccountBalanceById(id){
        const { accountJSON } = await new AccountService().getAccountById(id);

        if(!accountJSON || !accountJSON.idConta)
            return ErrorHelper.throw(ACCOUNT_ERROR_HANDLING.ACCOUNT_NOT_FOUND);

        return { saldo: accountJSON.saldo };

    }

}

module.exports = AccountBalanceService;