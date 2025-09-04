import {createReadStream, createWriteStream} from "fs";

// create a readable stream
const readStream = createReadStream("largefile.txt");
readStream.on("data", (data) => {
    console.log(data);
});

// create a writable stream
const writeStream = createWriteStream("largefile.txt");
writeStream.on("data", (data) => {
    console.log(data);
});
// pipe the readable stream to the writable stream
readStream.pipe(writeStream);