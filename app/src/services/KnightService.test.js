import http from "../utils/http";
import KnightService from "./KnightService";

jest.mock("../utils/http");

describe("KnightService", () => {
  describe("getmovements", () => {
    let movements;

    beforeAll(async () => {
      movements = await KnightService.getmovement("A1");
    });

    it("calls http client with correct route path", () => {
      expect(http.get).toHaveBeenCalledWith("/movements/knight/A1");
    });

    it("retrieves movements by provided position", () => {
      expect(movements).toEqual([[2, 3], [3, 2]]);
    });
  });
});
