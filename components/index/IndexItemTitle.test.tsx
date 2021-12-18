/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { IndexItemTitle } from "./IndexItemTitle";

describe("IndexItemTitle", () => {
  describe("small version", () => {
    it("shows the tile", async () => {
      const { getByText } = render(
        <IndexItemTitle pageHasTitle title={"Example Title Here"} />
      );

      expect(getByText("Example Title Here")).toBeInTheDocument();
    });

    it("is small", async () => {
      const { getByTestId } = render(
        <IndexItemTitle pageHasTitle title={"Example Title Here"} />
      );

      expect(getByTestId("IndexItemTitle h2")).toBeInTheDocument();
    });
  });
  describe("big version", () => {
    it("shows the tile", async () => {
      const { getByText } = render(
        <IndexItemTitle title={"Example Title Here"} />
      );

      expect(getByText("Example Title Here")).toBeInTheDocument();
    });

    it("is big", async () => {
      const { getByTestId } = render(
        <IndexItemTitle title={"Example Title Here"} />
      );

      expect(getByTestId("IndexItemTitle h1")).toBeInTheDocument();
    });
  });
});
