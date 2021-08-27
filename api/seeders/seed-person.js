module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkDelete('Person', null)
      return queryInterface.bulkInsert('Person', [{
            nome: "Comprador número um",
            cpf: "222.333.666-77",
            dataNascimento: "1991-01-29",
            dataCriacao: "2021-08-25",
            dataAtualizacao: "2021-08-25",
      }])
    },
    down: queryInterface => queryInterface.bulkDelete('Person', null),
  }