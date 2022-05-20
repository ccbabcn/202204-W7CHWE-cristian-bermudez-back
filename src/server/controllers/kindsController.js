const debug = require("debug")("kinds:server:kindsController");
const chalk = require("chalk");
const Kind = require("../../database/models/Kind");

const listKinds = async (req, res, next) => {
  try {
    debug(chalk.green("Received request to get kinds list"));
    const kinds = await Kind.find();
    if (!kinds) {
      debug(chalk.red("Received a bad request to get kinds list"));
      const cantFindError = new Error();
      cantFindError.code = 400;
      cantFindError.errorMessage = "Bad request";
      next(cantFindError);
    } else {
      res.status(200).json({ kinds });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = listKinds;
