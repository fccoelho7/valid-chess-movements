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
    expect(wrapper.find(".item").length).toEqual(64);
  });

  it("moves knight", () => {
    wrapper.find(".item-1-2").simulate("click");

    expect(wrapper.find(".item-1-2").hasClass("active")).toBeTruthy();
  });

  it("highlights available positions", async () => {
    wrapper.find(".show-moviments").simulate("click");

    await Promise.resolve();

    expect(wrapper.find(".item-2-3").hasClass("moviment")).toBeTruthy();
    expect(wrapper.find(".item-3-2").hasClass("moviment")).toBeTruthy();
    expect(wrapper.find(".item-1-7").hasClass("moviment")).toBeTruthy();
  });
});
