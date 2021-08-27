JSON criação Account

[POST] http://localhost:3000/api/v1/account
{
    "idPessoa": 1,
    "limiteSaqueDiario": "1000.00",
    "saldo": "0",
    "flagAtivo": false,
    "tipoConta": 1    
}

-- 

JSON Criação deposito

[POST]http://localhost:3000/api/v1/account/{id_account}/deposit
{
    "valor": "150.55"
}