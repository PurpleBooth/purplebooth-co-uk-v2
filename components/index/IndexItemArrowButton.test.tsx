/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { IndexItemLinkTitle } from "./IndexItemLinkTitle";
import { IndexItemCategories } from "./IndexItemCategories";
import { IndexItemArrowButton } from "./IndexItemArrowButton";

describe("IndexItemArrowButton", () => {
  it("shows all the categories", async () => {
    const { getByText } = render(
      <IndexItemArrowButton href="/news">Hello World</IndexItemArrowButton>
    );

    expect(getByText("Hello World")).toBeInTheDocument();
  });

  it("lets me link to item", async () => {
    const { getByTestId } = render(
      <IndexItemArrowButton href="/news">Hello World</IndexItemArrowButton>
    );

    expect(getByTestId("IndexItemArrowButton a")).toHaveAttribute(
      "href",
      "/news"
    );
  });
});
