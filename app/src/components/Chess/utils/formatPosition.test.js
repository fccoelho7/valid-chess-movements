import formatPosition from "./formatPosition";

describe("formatPosition", () => {
  it("returns formatted position", () => {
    expect(formatPosition({ x: 1, y: 1 })).toEqual("A1");
  });
});
