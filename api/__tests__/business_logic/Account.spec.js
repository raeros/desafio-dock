/* Registering module-alias for importing dependencies */
require("module-alias/register");

/* Importing Dependencies */
const { expect, assert } = require("chai");
const sinon = require("sinon");

/* Importing Constants */
const { ACCOUNT_ERROR_HANDLING } = require("@constants/ErrorHandling");

/* */
const AccountService = require("@services/account/AccountService");
const PersonService = require("@services/person/PersonService")

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
  

    it('Retornar que o idPessoa não possui uma conta vinculada', done => {
        expect(() => {
            new AccountService().isAccountValid({});
        }).to.throw(Error.message, ACCOUNT_ERROR_HANDLING.ACCOUNT_NOT_FOUND);

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

    it('Retornar erro na criação de conta. O idPessoa pessoa informado não existe.', done => {
        expect( async () => {
            // const personServiceMock = new PersonService();
            // const personMock = sinon.spy(personServiceMock, "getById");

            // const accountServiceMock = new AccountService();
            // const accountPersonMock = sinon.spy(accountServiceMock, "accountPersonValidation");

            // await personServiceMock.getById(1);
            // await accountServiceMock.accountPersonValidation(1);

            // assert(personMock.withArgs(1).calledOnce);
            // assert(accountPersonMock.withArgs(1).calledOnce);

        }).to.throw(Error.message, ACCOUNT_ERROR_HANDLING.TYPE_NOT_SUPPORTED)

        done();
        
    });

  
  });
  