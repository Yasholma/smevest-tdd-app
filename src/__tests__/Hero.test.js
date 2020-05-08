import React from "react";
import { shallow } from "enzyme";
import Hero from "../components/hero/hero.component";

describe("<Hero /> Component", () => {
    const wrapper = shallow(<Hero />);

    test("should render hero component", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
