const router = require("express").Router();

router.use("/auth", require("./auth.route"));
router.use("/user", require("./user.route"));
router.use("/article", require("./article.route"));

module.exports = router;
