/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, waitFor } from "@testing-library/react";
import * as router from "next/dist/client/router";
import { NextRouter } from "next/dist/client/router";
import { SpyInstance } from "jest-mock";
import Meta from "../../models/Meta";
import CategoryPage, {
  getStaticPaths,
  getStaticProps,
} from "./[category].page";

jest.mock("next/dist/client/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: "",
      prefetch: () => Promise.resolve(),
      push: () => {},
    };
  },
}));

const useRouter: SpyInstance<NextRouter, []> = jest.spyOn(
  router,
  "useRouter"
) as any;

describe("IndexPage", () => {
  it("Displays a list of articles", async () => {
    useRouter.mockImplementation(
      () =>
        ({
          route: "/categories/a",
          pathname: "/categories/a",
          query: { category: "a" },
          asPath: "",
          basePath: "basePath",
          isLocaleDomain: true,
          prefetch: () => Promise.resolve(),
          push: () => {},
        } as any)
    );

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

    const { getByText } = render(<CategoryPage meta={meta} />);

    await waitFor(() => expect(getByText("Title 1")).toBeInTheDocument());
    expect(getByText("Title 2")).toBeInTheDocument();
    expect(getByText("Title 3")).toBeInTheDocument();
  });
});

describe("getStaticPaths", () => {
  it("fallback is disabled", async () => {
    const actual = await getStaticPaths({});

    expect(actual.fallback).toBeFalsy();
  });

  it("there to be enough articles", async () => {
    const actual = await getStaticPaths({});

    expect(actual.paths.length).toBeGreaterThan(10);
    expect(new Set(actual.paths).size).toEqual(actual.paths.length);
    expect(actual.paths[actual.paths.length - 1]).toEqual({
      params: {
        category: "slides",
      },
    });
  });
});

describe("getStaticProps", () => {
  it("can get all of the items in the oop category", async () => {
    const actual = await getStaticProps({
      params: {
        category: "oop",
      },
    });

    expect(actual).toEqual(
      expect.objectContaining({
        props: expect.objectContaining({
          meta: expect.arrayContaining([
            expect.objectContaining({
              categories: expect.arrayContaining(["OOP"]),
            }),
          ]),
        }),
      })
    );
  });
});
