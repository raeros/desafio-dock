/* Alias registering */
require("module-alias/register");

/* Importing Dependencies */
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const { urlencoded, json } = require("body-parser");
const { errors } = require("celebrate");
const helmet = require("helmet");

/* Express init */
const app = express();

app.use(compression());
app.use(helmet());

/* Import Middlewares */
const ErrorHandlingMiddleware = require("@middlewares/ErrorHandling");

/* Disable headers etag and x-powered-by. { SECURITY & PERFORMANCE } */
app.disable("etag").disable("etag");

/* Express configuration */
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());

/* Database configuration */
const sequelize = require("./database");

// /* Import Models */
require("./app/models");

/* Routes configuration */
//app.use(require("./app/routes"));

/* Register middleware for Joi validation */
app.use(errors());

/* Middleware for custom error handling */
app.use(ErrorHandlingMiddleware.error);

/* Bootstrap application */
(async () => {
  try {
    await sequelize.sync(
      { force: false }
    );

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, function() {
      console.log(`Listening on Port ${PORT}`);
    });

  } catch (error) {
    console.log(error);
  }
})();

module.exports = app;
