import ArticlesService from "./ArticleService";

describe("ArticleService", () => {
  it("can get me all", async () => {
    const service = new ArticlesService();
    const all = await service.find();

    expect(all.length).toBeGreaterThan(10);
  });

  it("can get me in a category", async () => {
    const service = new ArticlesService();
    const all = await service.find({ categories: "Complexity" });

    expect(all.map((article) => article.meta.categories).flat()).toEqual([
      "Complexity",
      "OOP",
      "Programming",
    ]);
  });
});
