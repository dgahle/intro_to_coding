// 
// Script for running the JavaScript demo scripts
// 
// Imports
import {fileURLToPath} from "url";
import {hello_world} from './hello_world.js';


// Variables


// Functions
function main(){
    hello_world()
}

// Main
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    main();
}