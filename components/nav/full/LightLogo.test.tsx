/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { DarkLogo } from "./DarkLogo";
import { LightLogo } from "./LightLogo";

describe("LightLogo", () => {
  it("renders a link", () => {
    const { getByTestId } = render(<LightLogo />);

    expect(getByTestId("LightLogo")).toHaveAttribute("href", "/");
  });
});
