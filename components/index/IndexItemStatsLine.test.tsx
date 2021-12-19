/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { IndexItemTitle } from "./IndexItemTitle";
import { IndexItemStatsLine } from "./IndexItemStatsLine";

describe("IndexItemStatsLine", () => {
  it("internationalise the read length", async () => {
    const { getByText } = render(
      <IndexItemStatsLine
        date={new Date(2000, 2, 1, 12, 11, 10)}
        readLengthMin={23}
      />
    );

    expect(getByText(/23 min/)).toBeInTheDocument();
  });

  it("internationalise the date", async () => {
    const { getByText } = render(
      <IndexItemStatsLine
        date={new Date(2000, 2, 1, 12, 11, 10)}
        readLengthMin={23}
      />,
      {}
    );

    expect(getByText(/3\/1\/2000/)).toBeInTheDocument();
  });
});
