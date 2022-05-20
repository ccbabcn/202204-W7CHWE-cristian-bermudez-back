const chalk = require("chalk");
const debug = require("debug")("socialnetwork:server:middlewares:errors");

const notFoundError = (req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
};

// eslint-disable-next-line no-unused-vars
const generalError = (err, req, res, next) => {
  debug(chalk.red(`Error: ${err.message}`));
  const errorCode = err.code ?? 500;
  const errorMessage = err.code ? err.message : "Internal Server Error";
  res.status(errorCode).json({ message: errorMessage });
};

module.exports = {
  notFoundError,
  generalError,
};
