/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { BrandNav } from "./BrandNav";

describe("BrandNav", () => {
  it("displays children", () => {
    const { getByText } = render(<BrandNav>Some Content</BrandNav>);

    expect(getByText(/Some Content/)).toBeInTheDocument();
  });
});
