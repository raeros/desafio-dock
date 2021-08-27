/* Registering module-alias for importing dependencies */
require("module-alias/register");

/* Importing Dependencies */
const { expect } = require("chai");

/* Importing Constants */
const { ACCOUNT_ERROR_HANDLING } = require("@constants/ErrorHandling");

/* Importing Services */
const AccountService = require("@services/account/AccountService");

describe("Validação de regras de negócio do serviço AccountWithdrawalService", () => {
    beforeEach(done => {
      this.account = {
        idPessoa: 1,
        limiteSaqueDiario: "1000.00",
        saldo: "0",
        flagAtivo: true,
        tipoConta: 1
     };
      done();
    });
  

    // it('', done => {
    //     expect(() => {
            
    //     }).to.throw(Error.message, ACCOUNT_ERROR_HANDLING.);

    //     done();
        
    // });
  
  });
  