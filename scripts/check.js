const shell = require('shelljs');
const clearConsole = require('react-dev-utils/clearConsole');
const { green, red, yellow } = require('chalk');

const tty_mode = process.stdout.isTTY;

let log = arg => console.log(arg);

let build = () => {
  log(green("\nBuilding the project..."));
  shell.exec('yarn build >&-', (code, stderr) => {
    if (code !== 0) {
      log(red("\n⚠️  Build failed."));
    } else log(yellow("\n✅  Build completed."))
    lint();
  });
}

let lint = () => {
  log(green("\nRunning ESLint plugin..."));
  shell.exec('yarn lint >&-', (code) => {
    if (code !== 0) {
      log(red("\n⚠️  There were some errors. Run `yarn lint` to check the errors.\n"));
    } else log(yellow("\n✅  No errors.\n"))
  });
}

let main = () => {
  if (tty_mode) {
    clearConsole();
  }
  build();
}

main();
