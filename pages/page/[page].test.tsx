/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import BlogPage from "./[page]";
import Meta from "../../models/Meta";

describe("IndexPage", () => {
  it("Displays a list of articles", async () => {
    const meta = [
      new Meta(
        "Title 1",
        ["a", "b", "c"],
        10,
        "description",
        new Date(2012, 2, 2)
      ),
      new Meta(
        "Title 2",
        ["a", "b", "c"],
        10,
        "description",
        new Date(2012, 2, 2)
      ),
      new Meta(
        "Title 3",
        ["a", "b", "c"],
        10,
        "description",
        new Date(2012, 2, 2)
      ),
    ].map((meta) => meta.toJSON());

    const { getByText } = render(
      <BlogPage page={1} maxPage={10} meta={meta} />
    );

    expect(getByText("Title 1")).toBeInTheDocument();
    expect(getByText("Title 2")).toBeInTheDocument();
    expect(getByText("Title 3")).toBeInTheDocument();
  });
});
