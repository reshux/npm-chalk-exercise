var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World") + " "
              + chalk.underline("my name is") + " "
              + chalk.blue.bgRed("Duruhan") + ", "
              + chalk.cyan("I am") + " " + chalk.bgBlue("currently")
              + chalk.italic(" working on ") + chalk.bold("Bootcamp")
              + ".";
console.log(message);