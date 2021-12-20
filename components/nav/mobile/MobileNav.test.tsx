/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import MobileNav from "./MobileNav";

describe("MobileNav", () => {
  it("has a link to the homepage", async () => {
    const { getByTestId } = render(<MobileNav />);

    expect(getByTestId("MobileNav")).toHaveAttribute("href", "/");
  });
});
