/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, waitFor } from "@testing-library/react";
import License from "./license.page";

describe("License", () => {
  it("Renders", async () => {
    const { getByTestId } = render(<License />);

    await waitFor(() => expect(getByTestId("License")).toBeInTheDocument());
  });
});
