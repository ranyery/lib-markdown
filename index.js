// @ts-check

import chalk from "chalk";
import { promises } from "fs";

async function getFile(filePath) {
  const encoding = "utf8";
  try {
    const content = await promises.readFile(filePath, encoding);
    console.log(chalk.green(extractLinks(content)));
  } catch (e) {
    handleError(e);
  }
}

function extractLinks(content) {
  const regEx = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const extractedLinks = content.match(regEx);
  return extractedLinks;
}

function handleError(err) {
  throw new Error(chalk.red(err));
}

getFile("./files/texto1.md");
