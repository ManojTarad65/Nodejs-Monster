import { URL } from "url";

const myURL = new URL("https://www.google.com/search?q=javascript");
console.log(myURL.host);
//output -> www.google.com

console.log(myURL.hash);
//output -> #q=javascript

console.log(myURL.hostname);
//output -> www.google.com

console.log(myURL.href);
//output -> https://www.google.com/search?q=javascript

console.log(myURL.pathname);
//output -> /search

console.log(myURL.port);
//output -> ''

console.log(myURL.protocol);
//output -> https:

console.log(myURL.search);
//output -> ?q=javascript

console.log(myURL.username);
//output -> ''

console.log(myURL.password);
//output -> ''

console.log(myURL.searchParams);
//output -> URLSearchParams { 'q' => 'javascript' }

// both works the same 

console.log(myURL.toString());
//output -> https://www.google.com/search?q=javascript
console.log(myURL.toJSON());
//output -> { href: 'https://www.google.com/search?q=javascript' }