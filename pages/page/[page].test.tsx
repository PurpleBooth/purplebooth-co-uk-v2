/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, waitFor } from "@testing-library/react";
import Meta, { MetaJSON } from "../../models/Meta";
import BlogPage, { getStaticPaths, getStaticProps } from "./[page].page";

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

    await waitFor(() => expect(getByText("Title 1")).toBeInTheDocument());
    expect(getByText("Title 2")).toBeInTheDocument();
    expect(getByText("Title 3")).toBeInTheDocument();
  });
});

describe("getStaticPaths", () => {
  it("fallback is enabled", async () => {
    const actual = await getStaticPaths({});

    expect(actual.fallback).toBeFalsy();
  });

  it("there to be enough articles", async () => {
    const actual = await getStaticPaths({});

    expect(actual.paths.length).toBeGreaterThanOrEqual(4);
    expect(new Set(actual.paths).size).toEqual(actual.paths.length);
    expect(actual.paths[0]).toEqual({
      params: {
        page: "1",
      },
    });
  });
});

describe("getStaticProps", () => {
  it("fallback is enabled", async () => {
    const actual = await getStaticProps({});

    expect(actual).toEqual(
      expect.objectContaining({
        props: expect.objectContaining({
          maxPage: expect.any(Number),
          page: expect.any(Number),
          meta: expect.arrayContaining([expect.any(Object)]),
        }),
      })
    );
  });
});
