/* Import Dependencies */
const router = require("express").Router();

/* Payment Route */
router.use("/", require("./routes/account/Account"));

module.exports = router;
