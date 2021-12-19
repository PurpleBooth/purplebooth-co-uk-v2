/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { BrandNavItem } from "./BrandNavItem";

describe("BrandNavItem", () => {
  it("renders a link", () => {
    // We haven't loaded the icons for font awesome, this is a hack to suppress the warning about that
    jest.spyOn(console, "error").mockImplementation(() => {});

    const { getByTestId } = render(
      <BrandNavItem
        href={"/news"}
        title={"some title"}
        icon={["fas", "twitter"]}
      />
    );

    expect(getByTestId("BrandNavItem")).toHaveAttribute("href", "/news");
  });
});
