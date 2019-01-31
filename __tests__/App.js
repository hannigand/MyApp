import "react-native";
import React from "react";
import { Text } from "react-native";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import App from "../App";

describe("Test isPalindrome", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should return false", () => {
    expect(wrapper.instance().isPalindrome("Hello")).toBeFalsy();
  });
  it("should return true", () => {
    expect(wrapper.instance().isPalindrome("Racecar")).toBeTruthy();
  });
});
