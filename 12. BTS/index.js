// blocking code

console.log("start");
alert("blocking code");
console.log("end");

// non - blocking code -> using settimeout 

console.log("start");
setTimeout(() => console.log("non - blocking code"), 2000);
console.log("end");

// callback function -> function passed as an argument to another function
function fetchData(callback){
    setTimeout(() => callback("data"), 2000);
}

fetchData((data) => console.log(data));
