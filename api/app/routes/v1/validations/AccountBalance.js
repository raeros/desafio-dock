/* Importing Dependencies */
const { Joi } = require("celebrate");

const AccountBalanceValidation = {
    params: Joi.object({
        id: Joi.number()
                .integer()
                .min(1)
                .required()
    })
};


module.exports = {
    AccountBalanceValidation
}