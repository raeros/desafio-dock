/* Constants */
const { ACCOUNT_ERROR_HANDLING } = require("@constants/ErrorHandling");

/* Helpers */
const ErrorHelper = require("@helpers/Error");

/* Importing Service */
const AccountService = require("@services/account/AccountService");

class AccountBalanceService {
    async accountBalanceById(id){
        const { accountFormatted } = await new AccountService().getAccountById(id);

        if(!accountFormatted || !accountFormatted.idConta)
            return ErrorHelper.throw(ACCOUNT_ERROR_HANDLING.ACCOUNT_NOT_FOUND);

        return { saldo: accountFormatted.saldo };

    }

}

module.exports = AccountBalanceService;