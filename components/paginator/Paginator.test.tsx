/**
 * @jest-environment jsdom
 */

import { queryAllByRole, render } from "@testing-library/react";
import Paginator from "./Paginator";

describe("Paginator", () => {
  describe("1 page of 10", () => {
    it("it has the correct page links", async () => {
      const { queryAllByRole } = render(<Paginator maxPage={10} page={1} />);

      expect(
        queryAllByRole("link").map((item) => item.getAttribute("href"))
      ).toEqual(["/", "/page/2", "/page/3", "/page/4", "/page/2", "/page/10"]);
    });
  });

  describe("2 page of 10", () => {
    it("it has the correct page links", async () => {
      const { queryAllByRole } = render(<Paginator maxPage={10} page={2} />);

      expect(
        queryAllByRole("link").map((item) => item.getAttribute("href"))
      ).toEqual([
        "/",
        "/",
        "/",
        "/page/2",
        "/page/3",
        "/page/4",
        "/page/3",
        "/page/10",
      ]);
    });
  });

  describe("3 page of 10", () => {
    it("it has the correct page links", async () => {
      const { queryAllByRole } = render(
        <Paginator maxPage={10} page={3}></Paginator>
      );

      expect(
        queryAllByRole("link").map((item) => item.getAttribute("href"))
      ).toEqual([
        "/",
        "/page/2",
        "/",
        "/page/2",
        "/page/3",
        "/page/4",
        "/page/5",
        "/page/4",
        "/page/10",
      ]);
    });
  });

  describe("4 page of 10", () => {
    it("it has the correct page links", async () => {
      const { queryAllByRole } = render(
        <Paginator maxPage={10} page={4}></Paginator>
      );

      expect(
        queryAllByRole("link").map((item) => item.getAttribute("href"))
      ).toEqual([
        "/",
        "/page/3",
        "/page/2",
        "/page/3",
        "/page/4",
        "/page/5",
        "/page/6",
        "/page/5",
        "/page/10",
      ]);
    });
  });
  describe("5 page of 10", () => {
    it("it has the correct page links", async () => {
      const { queryAllByRole } = render(
        <Paginator maxPage={10} page={5}></Paginator>
      );

      expect(
        queryAllByRole("link").map((item) => item.getAttribute("href"))
      ).toEqual([
        "/",
        "/page/4",
        "/page/3",
        "/page/4",
        "/page/5",
        "/page/6",
        "/page/7",
        "/page/6",
        "/page/10",
      ]);
    });
  });
  describe("6 page of 10", () => {
    it("it has the correct page links", async () => {
      const { queryAllByRole } = render(
        <Paginator maxPage={10} page={6}></Paginator>
      );

      expect(
        queryAllByRole("link").map((item) => item.getAttribute("href"))
      ).toEqual([
        "/",
        "/page/5",
        "/page/4",
        "/page/5",
        "/page/6",
        "/page/7",
        "/page/8",
        "/page/7",
        "/page/10",
      ]);
    });
  });
  describe("7 page of 10", () => {
    it("it has the correct page links", async () => {
      const { queryAllByRole } = render(
        <Paginator maxPage={10} page={7}></Paginator>
      );

      expect(
        queryAllByRole("link").map((item) => item.getAttribute("href"))
      ).toEqual([
        "/",
        "/page/6",
        "/page/5",
        "/page/6",
        "/page/7",
        "/page/8",
        "/page/9",
        "/page/8",
        "/page/10",
      ]);
    });
  });
  describe("8 page of 10", () => {
    it("it has the correct page links", async () => {
      const { queryAllByRole } = render(
        <Paginator maxPage={10} page={8}></Paginator>
      );

      expect(
        queryAllByRole("link").map((item) => item.getAttribute("href"))
      ).toEqual([
        "/",
        "/page/7",
        "/page/6",
        "/page/7",
        "/page/8",
        "/page/9",
        "/page/10",
        "/page/9",
        "/page/10",
      ]);
    });
  });
  describe("9 page of 10", () => {
    it("it has the correct page links", async () => {
      const { queryAllByRole } = render(<Paginator maxPage={10} page={9} />);

      expect(
        queryAllByRole("link").map((item) => item.getAttribute("href"))
      ).toEqual([
        "/",
        "/page/8",
        "/page/7",
        "/page/8",
        "/page/9",
        "/page/10",
        "/page/10",
        "/page/10",
      ]);
    });
  });
  describe("10 page of 10", () => {
    it("it has the correct page links", async () => {
      const { queryAllByRole } = render(
        <Paginator maxPage={10} page={10}></Paginator>
      );

      expect(
        queryAllByRole("link").map((item) => item.getAttribute("href"))
      ).toEqual(["/", "/page/9", "/page/7", "/page/8", "/page/9", "/page/10"]);
    });
  });
});
