import chalk from "chalk";
import { getFile } from "./index.js";

const path = process.argv;

async function processText(filePath) {
  const result = await getFile(filePath[2]);
  console.log(chalk.yellow("Lista de links:"), result);
}

processText(path);

// How to execute:
// node cli.js ./files/texto1.md OR npm run cli
