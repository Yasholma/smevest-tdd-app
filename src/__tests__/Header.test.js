import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import Header from "../components/header/header.component";

describe("<Header /> Component", () => {
    test("should contain render two Navigation Link if not authenticated", () => {
        expect(shallow(<Header />).find(Link).length).toEqual(3);
    });
});
