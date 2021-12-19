/**
 * @jest-environment jsdom
 */

import { render, waitFor } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it("it has the correct page links", async () => {
    const { getByText } = render(<Layout>Some Content</Layout>);

    expect(getByText(/Some Content/)).toBeInTheDocument();
  });

  it("it can be given custom page titles", async () => {
    const { getByTestId } = render(
      <Layout pageDescription={"Some Description"} pageTitle={"A Title"}>
        Some Content
      </Layout>
    );

    expect(getByTestId("Layout")).toBeInTheDocument();
  });
});
