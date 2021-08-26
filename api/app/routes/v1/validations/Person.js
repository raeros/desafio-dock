/* Importing Dependencies */
const { Joi } = require("celebrate");

const PersonGetValidation = {
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
    PersonGetValidation
};