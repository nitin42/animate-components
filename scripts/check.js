const shell = require('shelljs');
const clearConsole = require('react-dev-utils/clearConsole');
const chalk = require('chalk');

const tty_mode = process.stdout.isTTY;

let log = (arg) => console.log(arg);

let build = () => {
  log(chalk.green("\nBuilding the project..."));
  shell.exec('yarn build >&-', (code, stderr) => {
    if (code !== 0) {
      log(chalk.red("\n⚠️  Build failed."));
    } else log(chalk.yellow("\n✅  Build completed."))
    flow();
  });
}

let flow = () => {
  log(chalk.green("\nTypechecking the source files..."));
  shell.exec('yarn flow >&-', (code) => {
    if (code !== 0) {
      log(chalk.red("\n⚠️  There were some type errors. Run `yarn flow` to check the errors."));
    } else log(chalk.yellow("\n✅  No errors."))
    lint();
  });
}

let lint = () => {
  log(chalk.green("\nRunning ESLint plugin..."));
  shell.exec('yarn lint >&-', (code) => {
    if (code !== 0) {
      log(chalk.red("\n⚠️  There were some errors. Run `yarn lint` to check the errors.\n"));
    } else log(chalk.yellow("\n✅  No errors.\n"))
  });
}

let main = () => {
  if (tty_mode) {
    clearConsole();
  }
  build();
}

main();
