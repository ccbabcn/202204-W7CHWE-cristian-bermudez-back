const debug = require("debug")("socialnetwork:database");
const chalk = require("chalk");
const mongoose = require("mongoose");

const connectDB = (connectionString) =>
  new Promise((resolve, reject) => {
    mongoose.set("toJSON", {
      virtuals: true,
      transform: (doc, ret) => {
        const newReturnedJSON = { ...ret };
        // eslint-disable-next-line no-underscore-dangle
        delete newReturnedJSON._id;
        // eslint-disable-next-line no-underscore-dangle
        delete newReturnedJSON.__v;
        return newReturnedJSON;
      },
    });
    mongoose.set("debug", true);
    mongoose.connect(connectionString, (error) => {
      if (error) {
        reject(error);
        return;
      }
      debug(chalk.bold.bgMagenta.greenBright(`Database connected`));
      resolve();
    });
  });

module.exports = connectDB;
