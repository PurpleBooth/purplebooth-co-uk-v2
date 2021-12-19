/**
 * @jest-environment jsdom
 */

import { queryAllByRole, render } from "@testing-library/react";
import { PageLink } from "./PageLink";

describe("PageLink", () => {
  describe("disabled", () => {
    it("renders content when disabled", async () => {
      const { getByText } = render(
        <PageLink disabled page={10}>
          Some Content
        </PageLink>
      );

      expect(getByText("Some Content")).toBeInTheDocument();
    });

    it("disabled mode has no links", async () => {
      const { queryAllByRole } = render(
        <PageLink disabled page={10}>
          Some Content
        </PageLink>
      );

      expect(queryAllByRole("link")).toHaveLength(0);
    });
  });

  describe("enabled", () => {
    it("renders content when enabled", async () => {
      const { getByText } = render(<PageLink page={10}>Some Content</PageLink>);

      expect(getByText("Some Content")).toBeInTheDocument();
    });

    it("enabled mode has link", async () => {
      const { getByRole } = render(<PageLink page={10}>Some Content</PageLink>);

      expect(getByRole("link")).toHaveAttribute("href", "/page/10");
    });
  });
});
