/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { NavFooter } from "./NavFooter";

describe("NavFooter", () => {
  it("has the copyright notice", async () => {
    const { getByTestId } = render(<NavFooter />);

    expect(getByTestId("CopyrightNotice")).toBeInTheDocument();
  });
});
