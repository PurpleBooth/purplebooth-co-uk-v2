/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { NavFooter } from "./NavFooter";
import { PrimaryNav } from "./PrimaryNav";
import { PrimaryNavItem } from "./PrimaryNavItem";

describe("PrimaryNavItem", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  it("Renders children", async () => {
    const { getByText } = render(
      <PrimaryNavItem href={"/news"}>Some Content</PrimaryNavItem>
    );

    expect(getByText("Some Content")).toBeInTheDocument();
  });
  it("Has link", async () => {
    const { getByTestId } = render(
      <PrimaryNavItem href={"/news"}>Some Content</PrimaryNavItem>
    );

    expect(getByTestId("PrimaryNavItem")).toHaveAttribute("href", "/news");
  });
});
