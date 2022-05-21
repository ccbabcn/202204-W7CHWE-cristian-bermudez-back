require("dotenv").config();

const debug = require("debug")("socialnetwork:server:userController");
const chalk = require("chalk");
const User = require("../../database/models/User");

const loadUsers = async (req, res, next) => {
  try {
    debug(chalk.green("Received request to get users list"));
    const users = await User.find();
    if (!users) {
      debug(chalk.red("Received a bad request to get users list"));
      const cantFindError = new Error();
      cantFindError.code = 400;
      cantFindError.errorMessage = "Bad request";
      next(cantFindError);
    } else {
      res.status(200).json({ users });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = loadUsers;
