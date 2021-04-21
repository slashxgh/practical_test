var mongoose = require("mongoose");
const chalk = require("chalk");

const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/nodeapp'

module.exports = function () {
  mongoose.Promise = global.Promise;
    mongoose.connect(dbUri, { useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true }).then(
      () => {
        console.log(chalk.green("Database Connected..."));
      },
      (err) => {
        console.log(chalk.red("Connection failed. Error"));
        console.log(chalk.red(err));
      }
    );
};
