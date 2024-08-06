import { add, subtract, multiply, div, mod } from './math.js';

/*
The below command does the following:
It uses the --import flag to load a data URL containing JavaScript code.
The code imports the register function from node:module and pathToFileURL from node:url.
It then calls register("ts-node/esm", pathToFileURL("./")) to register the ts-node/esm loader.
*/

// Run this script with the following command:
// node --trace-warnings --import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));' ./src/use-math.ts

console.log('Hello World!');
console.log("add(1, 2):", add(1, 2));
console.log("subtract(1, 2):", subtract(1, 2));
console.log("multiply(1, 2):", multiply(1, 2)); 
console.log("div(1, 2):", div(5, 2));
console.log("mod(1, 2):", mod(5, 2));

