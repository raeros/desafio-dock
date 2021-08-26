/* Importing Dependencies */
const sequelize = require("sequelize");

/* Set env variable for our database */
const { DB_HOST } = require("@constants/App");

/* Sequelize Config */
const sequelizeInstance = new sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      define: {
        freezeTableName: true
      }
  }
);

module.exports = sequelizeInstance;

