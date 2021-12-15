import Article from "../models/Article";
import { promises as fsPromises } from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import getConfig from "next/config";
import category from "../pages/categories/[category]";

export default class ArticlesService {
  async find(query?: { categories?: string[] }): Promise<Article[]> {
    const { serverRuntimeConfig } = getConfig();
    const articlePath = path.join(
      serverRuntimeConfig.PROJECT_ROOT,
      "content",
      "articles"
    );
    const articleFiles = await fsPromises.readdir(articlePath);
    const articles = [];

    for (const index in articleFiles) {
      const fullArticlePath = path.join(articlePath, articleFiles[index]);

      if (!(await fsPromises.lstat(fullArticlePath)).isFile()) {
        continue;
      }

      const rawContents = await fsPromises.readFile(fullArticlePath);
      const grayMatterFile: GrayMatterFile<Buffer> = matter(rawContents);

      let article = Article.fromGrayMatterFile(grayMatterFile);

      if (
        Array.isArray(query?.categories) &&
        article.meta.categories.filter((articleCategory) =>
          query?.categories
            ?.map((queryCategory) => queryCategory.toLowerCase())
            .includes(articleCategory.toLowerCase())
        ).length == 0
      ) {
        continue;
      }

      articles.push(article);
    }

    articles.sort(
      (a, b) =>
        (a.meta.date ? a.meta.date.valueOf() : 0) -
        (b.meta.date ? b.meta.date.valueOf() : 0)
    );
    articles.reverse();

    return articles;
  }
}
