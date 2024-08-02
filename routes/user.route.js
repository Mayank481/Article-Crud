const router = require("express").Router();
const user = require("../controller/user.controller");
const { authMiddleware } = require("../middleware/auth.middleware");

router.get("/getProfile/:id", authMiddleware, user.fetchUserById);
router.get("/getProfiles", authMiddleware, user.fetchUsers);

module.exports = router;
