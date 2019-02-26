import React from "react";
import { shallow } from "enzyme";
import Chess from "./";

jest.mock("../../services/KnightService");

describe("Chess", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Chess />);
  });

  it("renders a chess board", () => {
    expect(wrapper.find(".square").length).toEqual(64);
  });

  it("moves knight", () => {
    wrapper.find(".square-1-2").simulate("click");

    expect(wrapper.find(".square-1-2").hasClass("active")).toBeTruthy();
  });

  it("highlights available positions", async () => {
    wrapper.find(".square-1-2").simulate("click");
    wrapper.find(".show-movements").simulate("click");

    await Promise.resolve();

    expect(wrapper.find(".square-2-3").hasClass("movement")).toBeTruthy();
    expect(wrapper.find(".square-3-2").hasClass("movement")).toBeTruthy();
    expect(wrapper.find(".square-1-7").hasClass("movement")).toBeTruthy();
  });
});
