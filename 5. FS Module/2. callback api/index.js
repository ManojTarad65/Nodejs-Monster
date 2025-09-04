import * as fs from "fs";

// creating directory / Folder  -> using callback 
// fs.mkdir("newDir", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Directory created");
//     }
// });

// creating directory / Folder  -> using callback function
fs.mkdir("newDir/readthisfile", function(error) {
    // if (err) {
    //     console.log(err);
    // } else {
    //     console.log("Directory created");
    // }
    if(error) throw error;
    console.log("Directory created...");
});
    

    