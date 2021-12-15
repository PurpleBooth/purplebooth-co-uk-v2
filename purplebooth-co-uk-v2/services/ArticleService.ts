import Article from "../models/Article";
import { promises as fsPromises } from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import getConfig from "next/config";

interface Query {
  categories?: string[] | string;
}

function standardise(
  value: string[] | string | undefined
): string[] | undefined {
  if (Array.isArray(value) || value === undefined) {
    return value as string[] | undefined;
  } else {
    return [value as string];
  }
}

export default class ArticlesService {
  async find(query?: {
    categories?: string[] | string;
    year?: string[] | string;
    month?: string[] | string;
    day?: string[] | string;
    slug?: string[] | string;
  }): Promise<Article[]> {
    const { serverRuntimeConfig } = getConfig();
    const articlePath = path.join(process.cwd(), "content", "articles", "");
    const articleFiles = await fsPromises.readdir(articlePath);
    const articles = [];
    let categories = standardise(query?.categories);
    let day = standardise(query?.day);
    let month = standardise(query?.month);
    let year = standardise(query?.year);
    let slug = standardise(query?.slug);

    for (const index in articleFiles) {
      const fullArticlePath = path.join(articlePath, articleFiles[index]);

      if (!(await fsPromises.lstat(fullArticlePath)).isFile()) {
        continue;
      }

      const rawContents = await fsPromises.readFile(fullArticlePath);
      const grayMatterFile: GrayMatterFile<Buffer> = matter(rawContents);

      let article = await Article.fromGrayMatterFile(grayMatterFile);

      if (categories && !article.hasAnyCategory(categories)) {
        continue;
      }

      if (
        year &&
        month &&
        day &&
        !article.isOnDate(year?.at(0), month?.at(0), day?.at(0))
      ) {
        continue;
      }

      if (slug && !article.hasSlug(slug?.at(0))) {
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
