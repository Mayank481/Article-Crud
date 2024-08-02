const Article = require("../models/article.model");
const logger = require("../logger/logger");

module.exports.createArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const article = await Article.create({
      title,
      content,
      author: req.user.id,
    });
    logger.info("Article posts Successfully :)");
    return res.status(200).json({
      message: "Article posts Successfully :)",
      article,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: "Somethings went wrong. Please try again later",
    });
  }
};

module.exports.fetchArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    logger.info("Articles fetch Successfully :)");
    return res.status(200).json({
      message: "Articles fetch Successfully :)",
      data: articles,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: "Something wants wrong :(",
    });
  }
};

module.exports.updateArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const article = await Article.findById(req.params.id);
    if (article.author.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    article.title = title;
    article.content = content;
    await article.save();
    logger.info("Article Updated Successfully :)");
    res.status(200).json({
      message: "Article Updated Successfully :)",
      data: article,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      message: "Something went wrong :(",
    });
  }
};

module.exports.deleteArticle = async (req, res) => {
  try {
    const Article_id = req.params.id;
    const result = await Article.findByIdAndDelete(Article_id, { new: true });
    if (result.author.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    logger.info("User Deleted Successfully :(");
    res.status(200).json({
      message: "User Deleted Successfully :(",
      data: result,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: "Something went wrong :(",
    });
  }
};
