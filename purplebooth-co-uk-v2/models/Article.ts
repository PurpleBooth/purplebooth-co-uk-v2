import Meta, { MetaJSON } from "./Meta";
import { GrayMatterFile } from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface ArticleJSON {
  meta: MetaJSON;
  contents: string;
}

export default class Article {
  meta: Meta;
  contents: string;

  constructor(meta: Meta, contents: string) {
    this.meta = meta;
    this.contents = contents;
  }

  static fromGrayMatterFile(grayMatterFile: GrayMatterFile<Buffer>) {
    return new Article(
      Meta.fromGrayMatterFile(grayMatterFile),
      grayMatterFile.content
    );
  }

  toJSON(): ArticleJSON {
    return { meta: this.meta.toJSON(), contents: this.contents };
  }

  hasAnyCategory(givenCategories: string[]): boolean {
    return (
      Array.isArray(givenCategories) &&
      this.meta.categories.filter((articleCategory) =>
        givenCategories
          ?.map((queryCategory) => queryCategory.toLowerCase())
          .includes(articleCategory.toLowerCase())
      ).length == 0
    );
  }

  isOnDate(year?: string, month?: string, day?: string): boolean {
    let date = new Date(
      parseInt(year || "1970"),
      parseInt(month || "1"),
      parseInt(day || "1")
    );

    return (
      this.meta.date?.getDate() == date.getDate() &&
      this.meta.date.getMonth() == date.getMonth() &&
      this.meta.date.getFullYear() == date.getFullYear()
    );
  }

  hasSlug(slug?: string): boolean {
    return this.meta.slug == slug;
  }
}
