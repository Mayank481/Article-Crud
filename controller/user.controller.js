const User = require("../models/user.model");
const logger = require("../logger/logger");

module.exports.fetchUserById = async (req, res) => {
  try {
    const user_id = req.params.id;
    const user = await User.findById(user_id);
    logger.info("User fetch Successfully :)");
    return res.status(200).json({
      message: "User fetch Successfully :)",
      data: user,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: "Something wants wrong :(",
    });
  }
};

module.exports.fetchUsers = async (req, res) => {
  try {
    const users = await User.find();
    logger.info("Users fetch Successfully :)");
    return res.status(200).json({
      message: "Users fetch Successfully :)",
      data: users,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: "Something wants wrong :(",
    });
  }
};
