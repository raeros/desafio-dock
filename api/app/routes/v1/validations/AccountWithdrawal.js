/* Importing Dependencies */
const { Joi } = require("celebrate");

const AccountWithdrawalValidation = {
    params: Joi.object({
        id: Joi.number()
                .integer()
                .min(1)
                .required()
    }),
    body: Joi.object({
        valor: Joi.number()
                    .min(1)
                    .required()
    })
};


module.exports = {
    AccountWithdrawalValidation
}