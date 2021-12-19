/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { NavLink } from "./NavLink";

describe("NavLink", () => {
  it("renders children", async () => {
    const { getByText } = render(
      <NavLink href={"/news"}>Example content</NavLink>
    );

    expect(getByText("Example content")).toBeInTheDocument();
  });

  it("renders children", async () => {
    const { getByTestId } = render(
      <NavLink href={"/news"}>Example content</NavLink>
    );

    expect(getByTestId("NavLink")).toHaveAttribute("href", "/news");
  });
});
