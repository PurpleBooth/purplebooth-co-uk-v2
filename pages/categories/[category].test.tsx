/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import CategoryPage from "./[category]";
import Meta from "../../models/Meta";
import * as router from "next/router";
import { NextRouter } from "next/router";
import { SpyInstance } from "jest-mock";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: "",
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

    expect(getByText("Title 1")).toBeInTheDocument();
    expect(getByText("Title 2")).toBeInTheDocument();
    expect(getByText("Title 3")).toBeInTheDocument();
  });
});
