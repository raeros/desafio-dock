/* Importing Dependencies */
const router = require("express").Router();
const { celebrate } = require("celebrate");

/* Importing Controllers */
const AccountController = require("@controllers/account/AccountController");
const AccountDepositController = require("@controllers/account/deposit/DepositController");

/* Importing Validations */
const { AccountCreateValidation, AccountGetValidation } = require("@validationsv1/Account");
const { AccountDepositValidation } = require("@validationsv1/AccountDeposit");

router
  .route("/account")
  .post(celebrate(AccountCreateValidation.BODY), new AccountController().create);

router
  .route("/account/:id/deposit")
  .post(celebrate(AccountDepositValidation), new AccountDepositController().create);

module.exports = router;
