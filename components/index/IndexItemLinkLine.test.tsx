/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { IndexItemLinkTitle } from "./IndexItemLinkTitle";

describe("IndexItemLinkTitle", () => {
  describe("small version", () => {
    it("shows the tile", async () => {
      const { getByText } = render(
        <IndexItemLinkTitle
          href={"/news"}
          pageHasTitle
          title={"Example Title Here"}
        />
      );

      expect(getByText("Example Title Here")).toBeInTheDocument();
    });

    it("is small", async () => {
      const { getByTestId } = render(
        <IndexItemLinkTitle
          href={"/news"}
          pageHasTitle
          title={"Example Title Here"}
        />
      );

      expect(getByTestId("IndexItemTitle h2")).toBeInTheDocument();
    });

    it("lets me link to item", async () => {
      const { getByTestId } = render(
        <IndexItemLinkTitle
          href={"/news"}
          pageHasTitle
          title={"Example Title Here"}
        />
      );

      expect(getByTestId("IndexItemLinkTitle")).toHaveAttribute(
        "href",
        "/news"
      );
    });
  });

  describe("big version", () => {
    it("shows the tile", async () => {
      const { getByText } = render(
        <IndexItemLinkTitle href={"/news"} title={"Example Title Here"} />
      );

      expect(getByText("Example Title Here")).toBeInTheDocument();
    });

    it("is big", async () => {
      const { getByTestId } = render(
        <IndexItemLinkTitle href={"/news"} title={"Example Title Here"} />
      );

      expect(getByTestId("IndexItemTitle h1")).toBeInTheDocument();
    });

    it("lets me link to item", async () => {
      const { getByTestId } = render(
        <IndexItemLinkTitle
          href={"/news"}
          pageHasTitle
          title={"Example Title Here"}
        />
      );

      expect(getByTestId("IndexItemLinkTitle")).toHaveAttribute(
        "href",
        "/news"
      );
    });
  });
});
