/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, waitFor } from "@testing-library/react";
import AboutMe from "./me.page";

describe("About me", () => {
  it("Renders", async () => {
    const { getByTestId } = render(<AboutMe />);

    await waitFor(() => expect(getByTestId("AboutMe")).toBeInTheDocument());
  });
});
