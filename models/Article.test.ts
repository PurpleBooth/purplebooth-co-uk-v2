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
  });
});
