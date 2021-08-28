/* Registering module-alias for importing dependencies */
require("module-alias/register");

/* Importing Dependencies */
const { expect } = require("chai");

/* Importing Constants */
const { ACCOUNT_ERROR_HANDLING } = require("@constants/ErrorHandling");

/* Importing Services */
const AccountService = require("@services/account/AccountService");

describe("Validação de regras de negócio do serviço AccountService", () => {
  
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

    it('Retornar que a conta está com flag para bloqueio', done => {
        expect(() => {
            this.account.flagAtivo = false;
            new AccountService().isAccountBlocked(this.account);
        }).to.throw(Error.message, ACCOUNT_ERROR_HANDLING.ACCOUNT_BLOCKED);

        done();
        
    });

    it('Retornar que o tipo de conta a ser criada é invalida', done => {
        expect(() => {
            this.account.tipoConta = 2;
            new AccountService().isAccountTypeValid(this.account);
        }).to.throw(Error.message, ACCOUNT_ERROR_HANDLING.TYPE_NOT_SUPPORTED);

        done();
    });
  
  });
  