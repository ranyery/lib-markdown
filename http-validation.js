// @ts-check

import fetch from "node-fetch";

async function checkStatusCode(arrayURLs) {
  const arrayStatus = await Promise.all(
    arrayURLs.map(async (url) => {
      const response = await fetch(url);
      return response.status;
    })
  );

  return arrayStatus;
}

function getURLsFromArray(arrayLinks) {
  return arrayLinks.map((link) => Object.values(link)[0]);
}

export async function validateUrls(arrayLinks) {
  const links = getURLsFromArray(arrayLinks);
  const statusLinks = await checkStatusCode(links);
  return statusLinks;
}
