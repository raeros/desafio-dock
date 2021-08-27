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
        await this.isAccountTypeValid(account.tipoConta);

        const accountCreated = await Account.create({
            ...account,
            created_at: new Date(),
            updated_at: new Date()
        });

        return accountCreated;

    }

    async patchFlag(id){
        const { account } = await this.getAccountById(id);
        account.flagAtivo = false;

        await account.save();

        return { message: `Account id ${id} was blocked successfully!`};

    }

    async accountPersonValidation(idPessoa){

        const person = await new PersonService().getById(idPessoa);

        if(!person || !person.idPessoa)
             return ErrorHelper.throw(ACCOUNT_ERROR_HANDLING.PERSON_NOT_FOUND);

    } 

    async getAccountById(id) {
        const account = await Account.findByPk(id);
        const accountFormatted = account ? account.toJSON() : {};
                
        this.isAccountValid(accountFormatted);
        this.isAccountBlocked(accountFormatted);

        return {
            account,
            accountFormatted
        }
        
    }

    isAccountTypeValid(tipoConta){
        if(!Object.values(ACCOUNT_TYPES).includes(tipoConta))
                return ErrorHelper.throw(ACCOUNT_ERROR_HANDLING.TYPE_NOT_SUPPORTED);
    }

    isAccountValid(account){
        if(!account || !account.idConta)
             return ErrorHelper.throw(ACCOUNT_ERROR_HANDLING.ACCOUNT_NOT_FOUND);
        
    }

    isAccountBlocked(account){
        if(!account.flagAtivo)
            return ErrorHelper.throw(ACCOUNT_ERROR_HANDLING.ACCOUNT_BLOCKED);
    }

}

module.exports = AccountService;