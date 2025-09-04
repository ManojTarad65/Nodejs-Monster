(function (exports, require, module, __filename, __dirname) {
    console.log("hello from IIFE");
})()


// console.log(__dirname)  -> gives the directory name
// console.log(__filename) -> gives the file name
// console.log(module)     -> gives the module object
// module.exports = name   -> we are exporting the func name to the other files (export multiple files using {})
// const name = require("./greet"); -> we are importing the greet function from the greet.js file


