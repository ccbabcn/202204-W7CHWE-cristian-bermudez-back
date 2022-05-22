require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const debug = require("debug")("socialnetwork:server:userController");
const chalk = require("chalk");
const User = require("../../database/models/User");

const userLogin = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  try {
    if (!user) {
      res.status(401).json({ msg: "Username or password are worng" });
    } else {
      const passwordIsRight = await bcrypt.compare(password, user.password);

      const userData = {
        username: user.username,
        id: user.id,
      };

      if (!passwordIsRight) {
        res.status(401).json({ msg: "Username or password are worng" });
      } else {
        const token = jwt.sign(userData, process.env.JWT_SECRET);
        res.status(200).json({ token });
      }
    }
  } catch (error) {
    next(error);
  }
};

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

module.exports = { loadUsers, userLogin };
