const router = require("express").Router();
const auth = require("../controller/authentication.controller");
const {
  validateRegister,
  validateLogin,
} = require("../middleware/datavalidation.middleware");
const {
  sourceVerification,
} = require("../middleware/sourceVerification.middleware");

router.post("/register", validateRegister, auth.signUp);
router.post("/login", validateLogin, auth.signIn);

module.exports = router;
