import formatPosition from "./formatPosition";

describe("formatPosition", () => {
  it("returns formatted position", () => {
    expect(formatPosition(1, 1)).toEqual("A1");
  });
});
