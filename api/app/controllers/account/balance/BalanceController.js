/* Services */
const AccountBalanceService = require("@services/account/AccountBalanceService");

class AccountBalanceController {
    async getById(req, res, next) {
        try {
            
            const balance = await new AccountBalanceService().getAccountBalanceById(req.params.id);

            return res.status(200)
                      .send(balance);

        } catch (error) {
            next(error);
        }
    }
}

module.exports = AccountBalanceController;