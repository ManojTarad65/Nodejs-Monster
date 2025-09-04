import path from "path";
//give the last file name -> it will give the last file name of the path
console.log(path.basename("Users/apple/Documents/Web Dev/nodejs-monster/4. Path Module/index.js"));
//output -> index.js

//give the directory name -> it will give the directory name of the path
console.log(path.dirname("Users/apple/Documents/Web Dev/nodejs-monster/4. Path Module/index.js"));
//output -> Users/apple/Documents/Web Dev/nodejs-monster/4. Path Module

//give the extension name -> it will give the extension name of the path
console.log(path.extname("Users/apple/Documents/Web Dev/nodejs-monster/4. Path Module/index.js"));
//output -> .js

//give the parsed name -> it will give the parsed path of the file
console.log(path.parse("Users/apple/Documents/Web Dev/nodejs-monster/4. Path Module/index.js")); 
//output -> { root: '', dir: 'Users/apple/Documents/Web Dev/nodejs-monster/4. Path Module', base: 'index.js', ext: '.js', name: 'index' }

//give the relative name -> it will give the relative path of the file
console.log(path.relative("Users/apple/Documents/Web Dev/nodejs-monster/4. Path Module/index.js", "Users/apple/Documents/Web Dev/nodejs-monster/4. Path Module/index.js"));
//output -> .

//absolute path -> it will give the absolute path of the file
console.log(path.resolve("Users/apple/Documents/Web Dev/nodejs-monster/4. Path Module/index.js"));
//output -> /Users/apple/Documents/Web Dev/nodejs-monster/4. Path Module/index.js

// Join the path -> it will join the path
console.log(path.join("Users", "apple", "Documents", "Web Dev", "nodejs-monster", "4. Path Module", "index.js"));
//output -> /Users/apple/Documents/Web Dev/nodejs-monster/4. Path Module/index.js

//normalize -> improve the code 
console.log(path.normalize("c\\courses\\redux\\nodejs\\index.js"))
