/* Services */
const AccountDepositService = require("@services/account/AccountDepositService");

class AccountDepositController {
    async create(req, res, next) {
        try {
            
            await new AccountDepositService().create(req.params.id, req.body);

            return res.status(201)
                      .send(
                          { 
                              message: "Account deposit created.", body: req.body
                          });

        } catch (error) {
            next(error);
        }
    }
}

module.exports = AccountDepositController;