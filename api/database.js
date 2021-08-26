/* Importing Dependencies */
const { connect } = require("mongoose");

/* Set env variable for our database */
const { DB_HOST } = require("@constants/App");

if (DB_HOST) {
  connect(
    DB_HOST,
    { useNewUrlParser: true }
  )
    .then(() => {
      console.info(
        "Conection establish to database DOCK from service API"
      );
    })
    .catch(err => {
      console.error(JSON.stringify(err));
    });
} else {
  console.error(
    "Database location was not provided. Please, set DB_HOST variable."
  );
}
