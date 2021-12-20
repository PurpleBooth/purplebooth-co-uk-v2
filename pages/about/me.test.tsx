/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import AboutMe from "./me.page";

describe("About me", () => {
  it("Renders", () => {
    const { getByTestId } = render(<AboutMe />);

    expect(getByTestId("AboutMe")).toBeInTheDocument();
  });
});
