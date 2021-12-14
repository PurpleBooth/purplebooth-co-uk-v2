import { ReactNode } from "react";
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

  toJSON(): ArticleJSON {
    return { meta: this.meta.toJSON(), contents: this.contents };
  }
}
