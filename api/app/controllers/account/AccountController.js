/* Services */
const AccountService = require("@services/account/AccountService");

class AccountController {
    async create(req, res, next) {
        try {
            
            await new AccountService().create(req.body);

            return res.status(201)
                      .send(
                          { 
                              message: "Account created!", body: req.body
                          });

        } catch (error) {
            next(error);
        }
    }
}

module.exports = AccountController;