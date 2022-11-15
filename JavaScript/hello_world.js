// 
// Script for printing and text calls in JavaScript
// 
// Imports
import { fileURLToPath } from "url";


// Variables
const msg = "Hello World!";


// Functions
export function hello_world() { 
    console.log(msg);
}


function main() {
    hello_world();
}


// Main
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    main();
}
