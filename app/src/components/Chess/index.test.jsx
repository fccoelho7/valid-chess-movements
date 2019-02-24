import React from "react";
import Chess from "./";
import { shallow } from "enzyme";

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

  it("highlights available positions", () => {
    wrapper.find(".show-moviments").simulate("click");

    expect(wrapper.find(".item-2-3").hasClass("moviment")).toBeTruthy();
    expect(wrapper.find(".item-4-5").hasClass("moviment")).toBeTruthy();
    expect(wrapper.find(".item-1-7").hasClass("moviment")).toBeTruthy();
  });
});
