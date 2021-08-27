/* Importing Dependencies */
const { Joi } = require("celebrate");

const AccountTransactionValidation = {
    params: Joi.object({
        id: Joi.number()
                .integer()
                .min(1)
                .required()
    })
};


module.exports = {
    AccountTransactionValidation
}