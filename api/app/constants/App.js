/* Application Constants */
const DB_HOST = `postgres://${process.env.DB_HOST}/${process.env.POSTGRES_DB}` || "postgres://dockuser:passw0rd1234@localhost:5432/dock";

const ACCOUNT_TYPES = {
  TIPO_CONTA_EXEMPLO: 1
}; 

/* Http Status Code Constants */
const ERRORS = {
  BUSINESS_LOGIC: {
    TYPE: "BUSINESS_LOGIC_ERROR",
    STATUS_CODE: 400
  }
};

module.exports = {
  DB_HOST,
  ACCOUNT_TYPES,
  ERRORS
};
