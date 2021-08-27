/* Importing Dependencies */
const router = require("express").Router();
const { celebrate } = require("celebrate");

/* Importing Controllers */
const AccountController = require("@controllers/account/AccountController");
const AccountDepositController = require("@controllers/account/deposit/DepositController");
const AccounBalanceController = require("@controllers/account/balance/BalanceController");
const AccounWithdrawalController = require("@controllers/account/withdrawal/WithdrawalController");

/* Importing Validations */
const { AccountValidation } = require("@validationsv1/Account");
const { AccountDepositValidation } = require("@validationsv1/AccountDeposit");
const { AccountBalanceValidation } = require("@validationsv1/AccountBalance");
const { AccountWithdrawalValidation } = require("@validationsv1/AccountWithdrawal");

router
  .route("/account")
  .post(celebrate(AccountValidation.BODY), new AccountController().create);

router
  .route("/account/:id/block")
  .patch(celebrate(AccountValidation.PARAMS), new AccountController().patchFlag);

router
  .route("/account/:id/deposit")
  .post(celebrate(AccountDepositValidation), new AccountDepositController().create);

router
  .route("/account/:id/withdrawal")
  .post(celebrate(AccountWithdrawalValidation), new AccounWithdrawalController().create);

router
  .route("/account/:id/balance")
  .get(celebrate(AccountBalanceValidation), new AccounBalanceController().getById);

module.exports = router;
