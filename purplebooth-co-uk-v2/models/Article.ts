import { ReactNode } from "react";
import Meta, { MetaJSON } from "./Meta";
import { GrayMatterFile } from "gray-matter";
import removeMarkdown from "markdown-to-text";

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

  toJSON(): ArticleJSON {
    return { meta: this.meta.toJSON(), contents: this.contents };
  }

  static fromGrayMatterFile(grayMatterFile: GrayMatterFile<Buffer>) {
    return new Article(
      Meta.fromGrayMatterFile(grayMatterFile),
      grayMatterFile.content
    );
  }
}
