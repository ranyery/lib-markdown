// @ts-check

import fetch from "node-fetch";

function handleError(err) {
  throw new Error(err.message);
}

async function checkStatusCode(arrayURLs) {
  try {
    const arrayStatus = await Promise.all(
      arrayURLs.map(async (url) => {
        const response = await fetch(url);
        return response.status;
      })
    );

    return arrayStatus;
  } catch (e) {
    handleError(e);
  }
}

function getURLsFromArray(arrayLinks) {
  return arrayLinks.map((link) => Object.values(link)[0]);
}

export async function validateUrls(arrayLinks) {
  const links = getURLsFromArray(arrayLinks);
  const statusLinks = await checkStatusCode(links);

  const results = arrayLinks.map((object, index) => {
    const result = { ...object, status: statusLinks?.[index] };
    return result;
  });

  return results;
}
