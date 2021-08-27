// [POST] localhost:3000/api/v1/account/{id_account}/deposit
// [Service] -> sempre antes de criar o deposito, verificar se o limite diario da conta foi atingido. Caso tenha sido, precisamos retornar um erro.


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