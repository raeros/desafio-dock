/* Models */
const Person = require("@models/person/PersonModel");

class PersonService {
    async getById(idConta) {
        return await Person.findByPk(idConta).then((data) => data ? data.toJSON() : {});
    }
}

module.exports = PersonService;