import { getFile } from "./index.js";

const path = process.argv;

console.log(getFile(path[2]));

// How to execute: node cli.js ./files/texto1.md
