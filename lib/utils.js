const chalk = require('chalk');
const clear  = require('clear');
const figlet = require('figlet');

exports.addTax = price => +price + price * 0.23

exports.configStart = () => {
  clear();
  console.log(
      chalk.yellow(
          figlet.textSync('Order Price', { horizontalLayout: 'full' })
      )
  );
}
