import * as fs from "fs/promises";

// creating directory / Folder

// try {
//     await fs.mkdir("./newDir/readthisfile");
//     console.log("Directory created");
// } catch (error) {
//     console.log(error)
// }

// Read the content

// try{
//     const files = await fs.readdir("./newDir")
//     console.log(files)
// } catch (error) {
//     console.log(error)
// }

//Remove the directory / Folder

// try {
//     await fs.rmdir("./newDir/hello")
// } catch (error){
//     console.log(error)
// }

// Create and Write Files

// try{
//     await fs.writeFile("./newDir/hello.txt", "Hello World");
//     await fs.appendFile("./newDir/hello.txt", "Hello World");
//     console.log("File created");
// } catch (error){
//     console.log(error)
// }

// Read the file

// try{
//     const data = await fs.readFile("./newDir/hello.txt", "utf-8");
//     console.log(data)
// } catch (error){
//     console.log(error)
// }

//copy the file

// try {
//   await fs.copyFile("./newDir/hello.txt", "./newDir/hello2.txt");
//   console.log("File copied");
// } catch (error) {
//   console.log(error);
// }

//delete the file

// try {
//   await fs.unlink("./newDir/hello2.txt");
//   console.log("File deleted");
// } catch (error) {
//   console.log(error);
// }

//rename the file
// try {
//   await fs.rename("./newDir/hello2.txt", "./newDir/hello.txt");
//   console.log("File renamed");
// } catch (error) {
//   console.log(error);
// }


// Information about the file
try {
    const stats = await fs.stat("./newDir/hello.txt");
    console.log(stats);
} catch (error) {
    console.log(error);
}
