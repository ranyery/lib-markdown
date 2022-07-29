// @ts-check

import chalk from "chalk";
import { promises } from "fs";

export async function getFile(filePath) {
  const encoding = "utf8";
  try {
    const content = await promises.readFile(filePath, encoding);
    console.log(extractLinks(content));
  } catch (e) {
    handleError(e);
  }
}

function extractLinks(content) {
  const regEx = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const extractedLinks = [];
  let temp;
  while ((temp = regEx.exec(content)) != null) {
    const occurrence = { [temp[1]]: temp[2] };
    extractedLinks.push(occurrence);
  }
  return extractedLinks;
}

function handleError(err) {
  throw new Error(chalk.red(err));
}

// getFile("./files/texto1.md");
