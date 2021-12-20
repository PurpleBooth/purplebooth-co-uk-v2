/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { PrimaryNav } from "./PrimaryNav";

describe("PrimaryNav", () => {
  it("Renders children", async () => {
    const { getByText } = render(<PrimaryNav>Some Content</PrimaryNav>);

    expect(getByText("Some Content")).toBeInTheDocument();
  });
});
