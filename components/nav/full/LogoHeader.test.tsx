/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { LogoHeader } from "./LogoHeader";

describe("LogoHeader", () => {
  it("renders a link", () => {
    const { getByTestId } = render(<LogoHeader />);

    expect(getByTestId("LogoHeader")).toBeInTheDocument();
  });
});
