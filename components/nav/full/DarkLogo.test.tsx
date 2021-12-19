/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { DarkLogo } from "./DarkLogo";

describe("DarkLogo", () => {
  it("renders a link", () => {
    const { getByTestId } = render(<DarkLogo />);

    expect(getByTestId("DarkLogo")).toHaveAttribute("href", "/");
  });
});
