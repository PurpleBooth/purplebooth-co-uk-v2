import Article from "../models/Article";
import fs from "fs/promises";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";

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
    const articlePath = path.join(process.cwd(), "content", "articles", "");
    const articleFiles = await fs.readdir(articlePath);
    const articles = [];
    const categories = standardise(query?.categories);
    const day = standardise(query?.day);
    const month = standardise(query?.month);
    const year = standardise(query?.year);
    const slug = standardise(query?.slug);

    for (const index in articleFiles) {
      const fullArticlePath = path.join(articlePath, articleFiles[index]);

      if (!(await fs.lstat(fullArticlePath)).isFile()) {
        continue;
      }

      const rawContents = await fs.readFile(fullArticlePath);
      const grayMatterFile: GrayMatterFile<Buffer> = matter(rawContents);

      const article = await Article.fromGrayMatterFile(grayMatterFile);

      if (categories && !article.hasAnyCategory(categories)) {
        continue;
      }

      if (
        year &&
        month &&
        day &&
        !article.isOnDate(year[0], month[0], day[0])
      ) {
        continue;
      }

      if (slug && !article.hasSlug(slug[0])) {
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
