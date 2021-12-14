import Article from "../models/Article";
import Meta from "../models/Meta";
import { promises as fsPromises } from "fs";
import path from "path";

import matter from "gray-matter";

export default class ArticlesService {
  async find(): Promise<Article[]> {
    const articlePath = `${__dirname}/../../../content/articles/`;
    const articleFiles = await fsPromises.readdir(articlePath);
    const articles = [];

    for (const index in articleFiles) {
      const fullArticlePath = path.join(articlePath, articleFiles[index]);

      if (!(await fsPromises.lstat(fullArticlePath)).isFile()) {
        continue;
      }

      const rawContents = await fsPromises.readFile(fullArticlePath);
      const { content, data } = matter(rawContents);

      articles.push(new Article(Meta.fromMarkdown(data, content), content));
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
