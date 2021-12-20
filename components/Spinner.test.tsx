/**
 * @jest-environment jsdom
 */

import { render, waitFor } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner", () => {
  it("renders", async () => {
    const { getByTestId } = render(<Spinner />);

    await waitFor(() => expect(getByTestId("Spinner")).toBeInTheDocument());
  });
});
