/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { Description } from "./Description";

describe("Description", () => {
  it("displays children", () => {
    const { getByText } = render(<Description>Some Content</Description>);

    expect(getByText(/Some Content/)).toBeInTheDocument();
  });
});
