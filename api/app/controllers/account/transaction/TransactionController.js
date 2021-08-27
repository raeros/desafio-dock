/* Services */
const AccountTransactionService = require("@services/account/AccountTransactionService");

class AccountTransactionController {

    async getAllById(req, res, next){
        try {
            
            const transactions = await new AccountTransactionService().getAllById(req.params.id);

            return res.status(200)
                      .send(transactions);

        } catch (error) {
            next(error);
        }
    }
}

module.exports = AccountTransactionController;