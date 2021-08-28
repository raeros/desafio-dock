/* Registering module-alias for importing dependencies */
require("module-alias/register");

/* Importing Dependencies */
const { expect } = require("chai");

/* Importing Constants */
const { ACCOUNT_ERROR_HANDLING } = require("@constants/ErrorHandling");

/* Importing Services */
const AccountWithdrawalService = require("@services/account/AccountWithdrawalService");
 
describe("Validação de regras de negócio do serviço AccountWithdrawalService", () => {
    beforeEach(done => {
      this.account = {
        idPessoa: 1,
        limiteSaqueDiario: "1000.00",
        saldo: "900.10",
        flagAtivo: true,
        tipoConta: 1
     };

     this.accountWithdrawal = {
        value: "900.12"
     };

     done();
    });
  
    it('Retornar erro para saque onde o valor solicitado é maior que o saldo atual da conta.', done => {
      expect(() => {
          new AccountWithdrawalService().isAccountBalanceAvailableWithdrawal(this.account, this.accountWithdrawal.value);
       }).to.throw(Error.message, ACCOUNT_ERROR_HANDLING.ACCOUNT_BALANCE_NOT_SUFFICIENT);

        done();
        
    });

    it('Retornar erro para saque onde foi atingido o valor limite diario de saque para a conta.', done => {
      expect(() => {
          this.accountWithdrawal.value = "1000.01";
          new AccountWithdrawalService().isAccountBalanceLimitWithdrawal(this.account, this.accountWithdrawal.value);
       }).to.throw(Error.message, ACCOUNT_ERROR_HANDLING.ACCOUNT_BALANCE_LIMIT_WITHDRAWAL);

        done();
        
    });
  
  });
  