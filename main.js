"use strict";
const chalk = require('chalk');
const figlet = require('figlet');
const greet = require('./greet');

figlet(greet('Xola'), function(err, data){
  console.log(data)
});
const styledMessage = chalk.bgGreen.white(greet('Xola'));
console.log(styledMessage);

console.log(greet("Luvuyo"));
