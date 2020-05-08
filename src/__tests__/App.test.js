import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Header from "../components/header/header.component";

describe("<App /> Component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    test("should container header component", () => {
        expect(wrapper.find(Header).length).toEqual(1);
    });
});
