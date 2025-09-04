import EventEmitter from "events";

// creating Instance of EventEmitter
const emitter = new EventEmitter();

// 1. on : it is used to register the event listener
// 2. once : it is used to register the event listener only once
// 3. emit : it is used to emit the event

emitter.on("response", (name, id) => {
    console.log(`response received for ${name} with id ${id}`);
});

emitter.emit("response", "John", 1);

