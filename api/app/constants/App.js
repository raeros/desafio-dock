/* Application Constants */
const DB_HOST = process.env.DB_HOST || "mongodb://db:27017/dock";

/* Http Status Code Constants */
const ERRORS = {
  BUSINESS_LOGIC: {
    TYPE: "BUSINESS_LOGIC_ERROR",
    STATUS_CODE: 409
  }
};


module.exports = {
  DB_HOST,
  ERRORS
};
