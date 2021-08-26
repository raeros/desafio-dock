/* Importing Dependencies */
const router = require("express").Router();

/* Account Route */
router.use("/", require("./routes/account"));

/* Person Route */
router.use("/", require("./routes/person"));

module.exports = router;