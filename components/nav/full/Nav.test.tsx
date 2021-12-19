/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import Nav from "./Nav";

describe("Nav", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  it("has a link to the homepage", async () => {
    const { getAllByRole } = render(<Nav />);

    let links = getAllByRole("link").map((c) => c.getAttribute("href"));
    expect(links).toContain("/");
  });

  it("has a link to about page", async () => {
    const { getAllByRole } = render(<Nav />);

    let links = getAllByRole("link").map((c) => c.getAttribute("href"));
    expect(links).toContain("/about/me");
  });
  it("has a link to license page", async () => {
    const { getAllByRole } = render(<Nav />);

    let links = getAllByRole("link").map((c) => c.getAttribute("href"));
    expect(links).toContain("/license");
  });
  it("has a link to twitter", async () => {
    const { getAllByRole } = render(<Nav />);

    let links = getAllByRole("link").map((c) => c.getAttribute("href"));
    expect(links).toContain("https://twitter.com/PurpleBooth");
  });
  it("has a link to linkedin", async () => {
    const { getAllByRole } = render(<Nav />);

    let links = getAllByRole("link").map((c) => c.getAttribute("href"));
    expect(links).toContain("https://www.linkedin.com/in/purplebooth/");
  });
  it("has a link to github", async () => {
    const { getAllByRole } = render(<Nav />);

    let links = getAllByRole("link").map((c) => c.getAttribute("href"));
    expect(links).toContain("https://github.com/PurpleBooth");
  });
});
