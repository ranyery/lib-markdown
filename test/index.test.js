import { getFile } from "../index.js";

const arrayResultMock = [
  { FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList" },
];

describe("getFile::", () => {
  it("should be a function", () => {
    expect(typeof getFile).toBe("function");
  });
  it("should return an array with results", async () => {
    const result = await getFile("./test/files/texto1.md");
    expect(result).toEqual(arrayResultMock);
  });
  it('should return message "There are no links"', async () => {
    const result = await getFile("./test/files/texto1-sem-links.md");
    expect(result).toBe("There are no links");
  });
});
