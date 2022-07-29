// @ts-check

import chalk from "chalk";
import { getFile } from "./index.js";
import { validateUrls } from "./http-validation.js";

const path = process.argv;

async function processText(filePath) {
  const result = await getFile(filePath[2]);
  if (path[3] && path[3].toLowerCase() === "validar") {
    console.log(chalk.yellow("Links validados:"), validateUrls(result));
    return;
  }

  console.log(chalk.yellow("Lista de links:"), result);
}

processText(path);

// How to execute:
// node cli.js ./files/texto1.md OR npm run cli OR npm run cli validar
