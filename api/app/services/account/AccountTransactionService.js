/* Importing Depedencies */
const { Op, literal } = require('sequelize');

/* Constants */
const { ACCOUNT_ERROR_HANDLING } = require("@constants/ErrorHandling");

/* Models */
const Transaction = require("@models/transaction/TransactionModel");

/* Helpers */
const ErrorHelper = require("@helpers/Error");

class AccountTransactionService {
    async create(id, valor){
      try {
        return await Transaction.create({
            idConta: id,
            valor: valor,
            created_at: new Date(),
            updated_at: new Date()
        });
      } catch (error) {
          return ErrorHelper.throw();
      }

    }

    async getWithdrawalTransactionByDay(idConta, date){
        const todayStart = date.set({ hour: 0, minute: 0, seconds: 0});
        const todayEnd = date.set({ hour: 23, minute: 59, seconds: 59});
        return await Transaction.findAll(
            {
                where: {
                    [Op.and]: [
                         {
                            "idConta": {
                                [Op.eq]: idConta
                            }
                        },
                        {
                            "dataTransacao": {
                                [Op.between]: [todayStart, todayEnd]
                            }
                        },
                        {
                            "valor":  {
                                [Op.lt]: 0
                            }
                        }
                    ]
                   
                }
            });
    }

}

module.exports = AccountTransactionService;