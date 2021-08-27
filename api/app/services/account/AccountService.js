/* Constants */
const { ACCOUNT_ERROR_HANDLING } = require("@constants/ErrorHandling");

/* Models */
const Account = require("@models/account/AccountModel");

/* Account Types */
const { ACCOUNT_TYPES } = require("@constants/App");

/* Helpers */
const ErrorHelper = require("@helpers/Error");

/* Importing Service */
const PersonService = require("@services/person/PersonService");

class AccountService {
    async create(account){
        await this.accountPersonValidation(account.idPessoa);
        await this.accountTypeValidation(account.tipoConta);

        const accountCreated = await Account.create({
            ...account,
            created_at: new Date(),
            updated_at: new Date()
        });

        return accountCreated;

    }

    async accountPersonValidation(idPessoa){

        const person = await new PersonService().getById(idPessoa);

        if(!person || !person.idPessoa)
             return ErrorHelper.throw(ACCOUNT_ERROR_HANDLING.PERSON_NOT_FOUND);

    }

    accountTypeValidation(tipoConta){
        if(!Object.values(ACCOUNT_TYPES).includes(tipoConta))
                return ErrorHelper.throw(ACCOUNT_ERROR_HANDLING.TYPE_NOT_SUPPORTED);
    }

    async getAccountById(id) {
        return await Account.findByPk(id).then((data) => data ? { accountModel: data, accountJSON: data.toJSON } : {});
    }

}

module.exports = AccountService;