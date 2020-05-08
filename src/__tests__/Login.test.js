import React from "react";
import { shallow } from "enzyme";
import Login from "../components/login/login.component";


describe("<Login />", () => {
    test("should render login component", () => {
        expect(shallow(<Login />)).toMatchSnapshot();
    })
})