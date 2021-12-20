import { GrayMatterFile } from "gray-matter";
import Meta, { MetaJSON } from "./Meta";

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
    for (const category of givenCategories) {
      if (this.meta.categories.map(category => category.toLowerCase()).includes(category.toLowerCase())) {
        return true;
      }
    }

    return false
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
