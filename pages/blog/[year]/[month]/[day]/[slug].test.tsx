/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import IndexPage from "./[slug]";
import Meta from "../../../../../models/Meta";
import Article from "../../../../../models/Article";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

describe("IndexPage", () => {
  it('404"s on no article', () => {
    const { getByText } = render(<IndexPage />);

    expect(getByText(/404/)).toBeInTheDocument();
  });

  it("Displays the article", async () => {
    const meta = new Meta(
      "Title!",
      ["a", "b", "c"],
      10,
      "description",
      new Date(2012, 2, 2)
    );
    const article = new Article(meta, "contents");
    const serializeResult: MDXRemoteSerializeResult = await serialize(
      "Some Content"
    );

    const { getByText } = render(
      <IndexPage article={article.toJSON()} contents={serializeResult} />
    );

    expect(getByText("Title!")).toBeInTheDocument();
    expect(getByText("Some Content")).toBeInTheDocument();
    expect(getByText("a")).toBeInTheDocument();
    expect(getByText("b")).toBeInTheDocument();
    expect(getByText("c")).toBeInTheDocument();
    expect(getByText(/10/)).toBeInTheDocument();
    expect(getByText(/2012/)).toBeInTheDocument();
  });
});
