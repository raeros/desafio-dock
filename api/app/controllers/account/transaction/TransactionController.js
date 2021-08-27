/* Services */
const AccountTransactionService = require("@services/account/AccountTransactionService");

class AccountTransactionController {
    async getById(req, res, next) {
        try {
            
            const balance = await new AccountTransactionService().accountBalanceById(req.params.id);

            return res.status(200)
                      .send(balance);

        } catch (error) {
            next(error);
        }
    }
}

module.exports = AccountTransactionController;