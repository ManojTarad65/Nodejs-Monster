import * as fs from "fs";

// creating directory / Folder
fs.mkdirSync("newDir/syncFolder");
console.log("Directory created");

// Read the content
const files = fs.readdirSync("newDir");
console.log(files);
