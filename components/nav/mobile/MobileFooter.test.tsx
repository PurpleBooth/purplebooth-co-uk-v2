/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { MobileNav } from "./MobileNav";
import { MobileFooter } from "./MobileFooter";

describe("MobileNav", () => {
  it("has a link to the homepage", async () => {
    const { getAllByRole } = render(<MobileFooter />);

    let links = getAllByRole("link").map((c) => c.getAttribute("href"));
    expect(links).toContain("/");
  });

  it("has a link to about page", async () => {
    const { getAllByRole } = render(<MobileFooter />);

    let links = getAllByRole("link").map((c) => c.getAttribute("href"));
    expect(links).toContain("/about/me");
  });
  it("has a link to license page", async () => {
    const { getAllByRole } = render(<MobileFooter />);

    let links = getAllByRole("link").map((c) => c.getAttribute("href"));
    expect(links).toContain("/license");
  });
  it("has the copyright notice", async () => {
    const { getByTestId } = render(<MobileFooter />);

    expect(getByTestId("CopyrightNotice")).toBeInTheDocument();
  });
});
