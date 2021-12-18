/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { IndexItemTitle } from "./IndexItemTitle";
import { IndexItemStatsLine } from "./IndexItemStatsLine";

describe("IndexItemTitle", () => {
  it("internationalise the read length", async () => {
    const { getByText } = render(
      <IndexItemStatsLine date={new Date(2000, 1, 1)} readLengthMin={23} />
    );

    expect(getByText(/23 Min./)).toBeInTheDocument();
  });

  it("internationalise the date", async () => {
    const { getByText } = render(
      <IndexItemStatsLine
        date={new Date(2000, 1, 1, 12, 11, 10)}
        readLengthMin={23}
      />
    );

    expect(getByText(/1.2.2000/)).toBeInTheDocument();
  });
});
