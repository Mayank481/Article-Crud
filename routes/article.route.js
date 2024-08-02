const router = require("express").Router();
const article = require("../controller/article.controller");
const { authMiddleware } = require("../middleware/auth.middleware");
const { validateCreateArticle, validateUpdateArticle } = require("../middleware/datavalidation.middleware");

router.post("/createArticle", authMiddleware, validateCreateArticle,  article.createArticle);
router.put("/updateArticle/:id", authMiddleware, validateUpdateArticle, article.updateArticle);
router.get("/fetchArticle", article.fetchArticles);
router.delete("/deleteArticle/:id", authMiddleware, article.deleteArticle);

module.exports = router;
