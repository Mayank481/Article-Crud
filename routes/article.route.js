const router = require("express").Router();
const article = require("../controller/article.controller");
const { authMiddleware } = require("../middleware/auth.middleware");

router.post("/createArticle", authMiddleware, article.createArticle);
router.put("/updateArticle/:id", authMiddleware, article.updateArticle);
router.get("/fetchArticle", article.fetchArticles);
router.delete("/deleteArticle/:id", authMiddleware, article.deleteArticle);

module.exports = router;
