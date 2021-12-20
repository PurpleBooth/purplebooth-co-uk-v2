/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import License from "./license";

describe("License", () => {
  it("Renders", () => {
    const { getByTestId } = render(<License />);

    expect(getByTestId("License")).toBeInTheDocument();
  });
});
