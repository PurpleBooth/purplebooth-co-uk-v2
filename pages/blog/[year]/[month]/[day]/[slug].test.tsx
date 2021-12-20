/**
 * @jest-environment jsdom
 */

import "fs";
import React from "react";
import { render } from "@testing-library/react";
import IndexPage, { getStaticPaths, getStaticProps } from "./[slug].page";
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

describe("getStaticPaths", () => {
  it("fallback is enabled", async () => {
    const actual = await getStaticPaths({});

    expect(actual.fallback).toBeFalsy();
  });
  it("there to be enough articles", async () => {
    const actual = await getStaticPaths({});

    expect(actual.paths.length).toBeGreaterThan(10);
    expect(new Set(actual.paths).size).toEqual(actual.paths.length);
    expect(actual.paths[actual.paths.length - 1]).toEqual({
      params: {
        day: "22",
        month: "1",
        slug: "mvvm-silex-talk",
        year: "2015",
      },
    });
  });
});

describe("getStaticProps", () => {
  it("fallback is enabled", async () => {
    const actual = await getStaticProps({
      params: {
        day: "22",
        month: "1",
        slug: "mvvm-silex-talk",
        year: "2015",
      },
    });

    expect(actual).toEqual(
      expect.objectContaining({
        props: expect.objectContaining({
          article: expect.objectContaining({
            meta: expect.objectContaining({
              title: "MVVM & Silex Talk",
            }),
          }),
        }),
      })
    );
  });
});
