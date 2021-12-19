/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { IndexItemCategories } from "./IndexItemCategories";

describe("IndexItemCategories", () => {
  it("shows all the categories", async () => {
    const { getByText } = render(
      <IndexItemCategories categories={["Category 1", "Another"]} />
    );

    expect(getByText("Category 1")).toBeInTheDocument();
    expect(getByText("Another")).toBeInTheDocument();
  });

  it("links to the categories", async () => {
    const { getByTestId } = render(
      <IndexItemCategories categories={["Category 1", "Another"]} />
    );

    expect(getByTestId("IndexItemCategories Another a")).toHaveAttribute(
      "href",
      "/categories/another"
    );
    expect(getByTestId("IndexItemCategories Category 1 a")).toHaveAttribute(
      "href",
      "/categories/category%201"
    );
  });
});
