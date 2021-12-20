import Article from "./Article";
import Meta from "./Meta";

describe("Article", () => {
  it("has a meta", async () => {
    const meta = new Meta("title", ["categories"], 10, "description");
    const article = new Article(meta, "contents");
    expect(article.meta).toEqual(meta);
  });

  it("has a contents", async () => {
    const meta = new Meta("title", ["categories"], 10, "description");
    const article = new Article(meta, "contents");
    expect(article.contents).toEqual("contents");
  });

  it("has a way to test if an article has an category", async () => {
    const meta = new Meta("title", ["a", "b", "c"], 10, "description");
    const article = new Article(meta, "contents");
    expect(article.hasAnyCategory(["a", "z"])).toBeTruthy();
    expect(article.hasAnyCategory(["x", "z"])).toBeFalsy();
  });
  it("is able to tell me if it was on a date", async () => {
    const meta = new Meta("title", ["a", "b", "c"], 10, "description", new Date(2020, 2, 2));
    const article = new Article(meta, "contents");
    expect(article.isOnDate("2020", '2', "2")).toBeTruthy();
    expect(article.isOnDate("2020", '2', "1")).toBeFalsy();
  });
  it("is able to tell me if it has a slug", async () => {
    const meta = new Meta("Title!", ["a", "b", "c"], 10, "description", new Date(2020, 2, 2));
    const article = new Article(meta, "contents");
    expect(article.hasSlug("title-")).toBeTruthy();
    expect(article.hasSlug("something else")).toBeFalsy();
  });
});
