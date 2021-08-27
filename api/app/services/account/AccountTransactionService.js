/* Importing Depedencies */
const { Op } = require('sequelize');

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

    async getAllById(idConta){
        return await Transaction.findAll(
            {
                where: {
                    [Op.and]: [
                         {
                            "idConta": {
                                [Op.eq]: idConta
                            }
                        }
                    ]
                   
                },
                raw: true
            });
    }

    async getTodayWithdrawalTransaction(idConta){
        const todayStart = new Date().setHours(0, 0, 0, 0);
        const todayEnd = new Date().setHours(23, 59, 59, 0);
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
                   
                },
                raw: true
            });
    }

}

module.exports = AccountTransactionService;