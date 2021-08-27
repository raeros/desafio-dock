JSON criação Account

[POST] http://localhost:3000/api/v1/account
{
    "idPessoa": 1,
    "limiteSaqueDiario": "1000.00",
    "saldo": "0",
    "flagAtivo": true,
    "tipoConta": 1    
}

-- 

JSON Criação deposito

[POST] http://localhost:3000/api/v1/account/{id_account}/deposit
{
    "valor": "150.55"
}

--

Buscar saldo de uma determinada conta
[GET] http://localhost:3000/api/v1/account/{id_account}/balance

retorno
{
    "saldo": "2581.52"
}


--

JSON Criação Saque
[POST] http://localhost:3000/api/v1/account/{id_account}/withdrawal
{
    "valor": "700"
}

--

Bloquear conta
[PATCH] http://localhost:3000/api/v1/account/{id_account}/block