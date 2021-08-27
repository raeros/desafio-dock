# Descrição
Este arquivo tem como objetivo demonstrar como você poderá baixar e executar este projeto em sua máquina local. A branch principal da aplicação é a `main`.

# Tecnologias
Node.js, Express, Postgres, Docker e Compose.

# Dependências
Este projeto utiliza docker, docker-compose(versão 3) e node.js. Para verificar se você possui instalado:

```shell
node --version 
docker --version
docker-compose --version
```

Caso a sua máquina não possua o docker ou o compose, basta seguir a orientação da documentação oficial [Docker](https://docs.docker.com/install/) e [Compose](https://docs.docker.com/compose/install/). Para instalação do node.js(versão v8+), aconselho a utilizar o [nvm](https://github.com/nvm-sh/nvm).

# Desenvolvimento
Para rodar a aplicação localmente:
```shell
git clone https://github.com/raeros/desafio-dock.git
cd desafio-dock
docker-compose build --no-cache & docker-compose up --build --force-recreate
```

O endpoint da aplicação ficará disponível em `htt://localhost:3000`.


## Casos de erro da API
No desenvolvimento da API, considerei alguns cenários em que a aplicação deve gerar erros. Abaixo listo:
- Em todas as requisições é verificado se a conta está com status de `blocked`. Caso esteja, não é permitido efetuar nenhum tipo de operação. Isso tanto vale para consultas ou criações.
- Nas requisições em que se referem a saque, sempre verifico se o limite diario de saque de uma determinada conta foi atingigo. Caso tenha sido, retorno essa informação.
- Sempre é verificado se o valor de saque solicitado condiz com o saldo da conta. Caso a conta não possua saldo para saque, retorno essa informação.
- Na hora de criação de uma conta, verifico se o `idPessoa` informado existe dentro da tabela `Person`. Caso não possua, retorno essa informação.



## Criação de contas `[POST]` `htt://localhost:3000/api/v1/account`
[POST] http://localhost:3000/api/v1/account
- BODY: 
```json
{
    "idPessoa": 1,
    "limiteSaqueDiario": "1000.00",
    "saldo": "0",
    "flagAtivo": true,
    "tipoConta": 1 
}
```
- RETORNO:
```json
{
    "message": "Account created!",
    "body": {
        "idPessoa": 1,
        "limiteSaqueDiario": 1000,
        "saldo": 0,
        "flagAtivo": true,
        "tipoConta": 1
    }
}
```

## Criação de depósito `[POST]` `htt://localhost:3000/api/v1/account/{id_account}/deposit`
- BODY:
```json
{
    "valor": "1999.50"
}
```
- RETORNO:
```json
{
    "message": "Account deposit created.",
    "body": {
        "valor": 1999.50
    }
}
```

## Criação de saque `[POST]` `htt://localhost:3000/api/v1/account/{id_account}/withdrawal`
- BODY:
```json
{
    "valor": "100.50"
}
```
- RETORNO:
```json
{
    "message": "Withdrawal created successfully!"
}
```
## Busca de saldo de uma determinada conta `[GET]` `http://localhost:3000/api/v1/account/{id_account}/balance`
- RETORNO:"
```json
{
    "saldo": "1999.99"
}
```

## Bloqueio de uma determinada conta `[PATCH]` `http://localhost:3000/api/v1/account/{id_account}/block`
- RETORNO: 
```json
{
    "message": "Account id 1 was blocked successfully!"
}
```

## Extrato de transações de uma determinada conta `[GET]` `http://localhost:3000/api/v1/account/{id_account}/transaction`
- RETORNO: 
```json
[
    {
        "idTransacao": 1,
        "valor": "1999.00",
        "created_at": "2021-08-26T19:33:47.321Z",
        "updated_at": "2021-08-26T19:33:47.321Z",
        "idConta": 1
    },
    {
        "idTransacao": 2,
        "valor": "-909.20",
        "created_at": "2021-08-26T19:33:49.788Z",
        "updated_at": "2021-08-26T19:33:49.788Z",
        "idConta": 1
    }
]
```


## Extrato de transações de uma determinada conta por intervalo de data `[GET]` `http://localhost:3000/api/v1/account/{id_account}/transaction?start=2021-08-26&end=2021-08-26`
- RETORNO: 
```json
[
    {
        "idTransacao": 1,
        "valor": "1999.00",
        "created_at": "2021-08-26T19:33:47.321Z",
        "updated_at": "2021-08-26T19:33:47.321Z",
        "idConta": 1
    },
    {
        "idTransacao": 2,
        "valor": "-909.20",
        "created_at": "2021-08-27T19:33:49.788Z",
        "updated_at": "2021-08-27T19:33:49.788Z",
        "idConta": 1
    }
]
```




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