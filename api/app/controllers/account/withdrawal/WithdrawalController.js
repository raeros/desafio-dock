// [POST] localhost:3000/api/v1/account/{id_account}/withdrawal
// [POST] efetuar saque de uma determinada conta
// [Service] -> verificar se o valor requisitado é maior que o valor em conta.
// cxhecar se tem saldo para saque

/* Services */
const AccountWithdrawalService = require("@services/account/AccountWithdrawalService");

class AccountWithdrawalController {
    async create(req, res, next) {
        try {
            
            const withdrawal = await new AccountWithdrawalService().create(req.params.id, req.body);

            return res.status(201)
                      .send(withdrawal);

        } catch (error) {
            next(error);
        }
    }
}

module.exports = AccountWithdrawalController;