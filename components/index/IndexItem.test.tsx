/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { IndexItemArrowButton } from "./IndexItemArrowButton";
import IndexItem from "./IndexItem";

describe("IndexItemArrowButton", () => {
  describe("small version", () => {
    it("has a title", async () => {
      const { getByText, getByTestId } = render(
        <IndexItem
          pageHasTitle
          articleMeta={{
            title: "This is a title",
            description: "Some Description",
            date: "2021-12-19T06:49:25+00:00",
            slug: "slug",
            categories: ["hello world", "another"],
            readLengthMin: 20,
          }}
        />
      );

      expect(getByText("This is a title")).toBeInTheDocument();
      expect(getByTestId("IndexItemLinkTitle")).toHaveAttribute(
        "href",
        "/blog/2021/11/19/slug"
      );
    });

    it("has a stats line", async () => {
      const { getByText, getByTestId } = render(
        <IndexItem
          pageHasTitle
          articleMeta={{
            title: "This is a title",
            description: "Some Description",
            date: "2021-12-19T06:49:25+00:00",
            slug: "slug",
            categories: ["hello world", "another"],
            readLengthMin: 20,
          }}
        />
      );

      expect(getByTestId("IndexItemStatsLine")).toBeInTheDocument();
    });

    it("has has categories", async () => {
      const { getByText, getByTestId } = render(
        <IndexItem
          pageHasTitle
          articleMeta={{
            title: "This is a title",
            description: "Some Description",
            date: "2021-12-19T06:49:25+00:00",
            slug: "slug",
            categories: ["hello world", "another"],
            readLengthMin: 20,
          }}
        />
      );

      expect(getByText("hello world")).toBeInTheDocument();
      expect(getByText("another")).toBeInTheDocument();
    });
    it("has a description", async () => {
      const { getByText, getByTestId } = render(
        <IndexItem
          pageHasTitle
          articleMeta={{
            title: "This is a title",
            description: "Some Description",
            date: "2021-12-19T06:49:25+00:00",
            slug: "slug",
            categories: ["hello world", "another"],
            readLengthMin: 20,
          }}
        />
      );

      expect(getByText("Some Description")).toBeInTheDocument();
    });
    it("has a read on button", async () => {
      const { getByText, getByTestId } = render(
        <IndexItem
          pageHasTitle
          articleMeta={{
            title: "This is a title",
            description: "Some Description",
            date: "2021-12-19T06:49:25+00:00",
            slug: "slug",
            categories: ["hello world", "another"],
            readLengthMin: 20,
          }}
        />
      );

      expect(getByTestId("IndexItemArrowButton a")).toHaveAttribute(
        "href",
        "/blog/2021/11/19/slug"
      );
    });
  });
  describe("big version", () => {
    it("has a title", async () => {
      const { getByText, getByTestId } = render(
        <IndexItem
          articleMeta={{
            title: "This is a title",
            description: "Some Description",
            date: "2021-12-19T06:49:25+00:00",
            slug: "slug",
            categories: ["hello world", "another"],
            readLengthMin: 20,
          }}
        />
      );

      expect(getByText("This is a title")).toBeInTheDocument();
      expect(getByTestId("IndexItemLinkTitle")).toHaveAttribute(
        "href",
        "/blog/2021/11/19/slug"
      );
    });

    it("has a stats line", async () => {
      const { getByText, getByTestId } = render(
        <IndexItem
          articleMeta={{
            title: "This is a title",
            description: "Some Description",
            date: "2021-12-19T06:49:25+00:00",
            slug: "slug",
            categories: ["hello world", "another"],
            readLengthMin: 20,
          }}
        />
      );

      expect(getByTestId("IndexItemStatsLine")).toBeInTheDocument();
    });

    it("has has categories", async () => {
      const { getByText, getByTestId } = render(
        <IndexItem
          articleMeta={{
            title: "This is a title",
            description: "Some Description",
            date: "2021-12-19T06:49:25+00:00",
            slug: "slug",
            categories: ["hello world", "another"],
            readLengthMin: 20,
          }}
        />
      );

      expect(getByText("hello world")).toBeInTheDocument();
      expect(getByText("another")).toBeInTheDocument();
    });
    it("has a description", async () => {
      const { getByText, getByTestId } = render(
        <IndexItem
          articleMeta={{
            title: "This is a title",
            description: "Some Description",
            date: "2021-12-19T06:49:25+00:00",
            slug: "slug",
            categories: ["hello world", "another"],
            readLengthMin: 20,
          }}
        />
      );

      expect(getByText("Some Description")).toBeInTheDocument();
    });
    it("has a read on button", async () => {
      const { getByText, getByTestId } = render(
        <IndexItem
          articleMeta={{
            title: "This is a title",
            description: "Some Description",
            date: "2021-12-19T06:49:25+00:00",
            slug: "slug",
            categories: ["hello world", "another"],
            readLengthMin: 20,
          }}
        />
      );

      expect(getByTestId("IndexItemArrowButton a")).toHaveAttribute(
        "href",
        "/blog/2021/11/19/slug"
      );
    });
  });
});
