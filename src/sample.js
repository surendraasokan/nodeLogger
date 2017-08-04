//closure
// outerFn() {
//   const welcomeMsg = "Hi";
//   function innerFn(name) {
//     return welcomeMsg + name;
//   }
//   return innerFn;
// }
const errorLog = require('./util/logger').errorlog;
const successlog = require('./util/logger').successlog;

var fs = require('fs');
var util = require('util');
var logFile = fs.createWriteStream('log.txt', { flags: 'a' });
  // Or 'w' to truncate the file every time the process starts.
var logStdout = process.stdout;

console.log = function () {
  successlog.info(arguments[0]);
  //errorLog.error('Error Message : ${error}');
  //logFile.write(util.format.apply(null, arguments) + '\n');
  //logStdout.write(util.format.apply(null, arguments) + '\n');
}

//const welcomeFn = outerFn();
console.log("=============Sarbein");
