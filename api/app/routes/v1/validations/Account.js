/* Importing Dependencies */
const { Joi } = require("celebrate");

const AccountValidation = {
    BODY: {
        body: Joi.object({
            idPessoa: Joi.number()
                        .integer()
                        .min(1)
                        .required(),
            saldo: Joi.number()
                        .min(0)
                        .required(),
            limiteSaqueDiario: Joi.number()
                        .min(0)
                        .required(),
            flagAtivo: Joi.boolean()
                        .required(),
            tipoConta: Joi.number()
                        .integer()
                        .required()
        })

    },
    PARAMS: {
        params: Joi.object({
            id: Joi.number()
                .integer()
                .min(1)
                .required()
        })
    }
};


module.exports = {
    AccountValidation
}