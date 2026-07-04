/**
 * @jest-environment jsdom
 */

import { queryAllByRole, render } from "@testing-library/react";
import { ActiveLink } from "./ActiveLink";
import { DisabledLink } from "./DisabledLink";

describe("ActiveLink", () => {
  it("Renders children", async () => {
    const { getByText } = render(<DisabledLink>Some Content</DisabledLink>);

    expect(getByText("Some Content")).toBeInTheDocument();
  });
  it("is not a link", async () => {
    const { queryAllByRole } = render(
      <DisabledLink>Some Content</DisabledLink>
    );

    expect(queryAllByRole("link")).toHaveLength(0);
  });
});
