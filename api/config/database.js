const config = {
    "development": {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: "5432",
        database: process.env.DB_DATABASE,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        logging: false,
    }
};

module.exports = config;