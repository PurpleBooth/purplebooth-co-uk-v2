/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { CopyrightNotice } from "./CopyrightNotice";

describe("CopyrightNotice", () => {
  it("has the current year", async () => {
    const { getByText } = render(<CopyrightNotice />);
    const currentYear = new Date().getFullYear().toString();
    let re = new RegExp(currentYear);

    expect(getByText(re)).toBeInTheDocument();
  });
});
