import http from "../utils/http";
import KnightService from "./KnightService";

jest.mock("../utils/http");

describe("KnightService", () => {
  describe("getMoviments", () => {
    let moviments;

    beforeAll(async () => {
      moviments = await KnightService.getMoviment("A1");
    });

    it("calls http client with correct route path", () => {
      expect(http.get).toHaveBeenCalledWith("/knight/moviment/A1");
    });

    it("retrieves moviments by provided position", () => {
      expect(moviments).toEqual([[2, 3], [3, 2]]);
    });
  });
});
