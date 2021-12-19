/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { ActiveLink } from "./ActiveLink";

describe("ActiveLink", () => {
  it("Renders children", async () => {
    const { getByText } = render(
      <ActiveLink page={3}>Some Content</ActiveLink>
    );

    expect(getByText("Some Content")).toBeInTheDocument();
  });
  it("Has link", async () => {
    const { getByTestId } = render(
      <ActiveLink page={3}>Some Content</ActiveLink>
    );

    expect(getByTestId("ActiveLink")).toHaveAttribute("href", "/page/3");
  });

  it("Has link to the homepage for page 1", async () => {
    const { getByTestId } = render(
      <ActiveLink page={1}>Some Content</ActiveLink>
    );

    expect(getByTestId("ActiveLink")).toHaveAttribute("href", "/");
  });
});
