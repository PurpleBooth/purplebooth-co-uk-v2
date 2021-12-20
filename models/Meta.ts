import { formatISO, parseISO } from "date-fns";
import { GrayMatterFile } from "gray-matter";
import removeMarkdown from "markdown-to-text";

const averageWpm = 255;

export interface MetaJSON {
  title: string;
  slug: string;
  categories: string[];
  readLengthMin: number;
  date: string | null;
  description: string;
}

export default class Meta {
  title: string;
  categories: string[];
  readLengthMin: number;
  date?: Date;
  description: string;

  constructor(
    title: string,
    categories: string[],
    readLengthMin: number,
    description: string,
    date?: Date
  ) {
    this.title = title;
    this.categories = categories;
    this.readLengthMin = readLengthMin;
    this.date = date;
    this.description = description;
  }

  public get slug(): string {
    return this.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-");
  }

  static fromGrayMatterFile(grayMatterFile: { content: string, data: { title?: string, categories?: string[], description?:string, date?:string }}) {
    const wordCount = grayMatterFile.content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / averageWpm);

    const split = grayMatterFile.content
      .split("\n\n")
      .filter((item) => item.trim() != "");
    const summary: string = removeMarkdown(split[0] || "");

    return new Meta(
      grayMatterFile.data.title || "",
      grayMatterFile.data.categories || [],
      readingTime,
      grayMatterFile.data.description || summary,
      grayMatterFile.data.date ? parseISO(grayMatterFile.data.date) : undefined
    );
  }

  toJSON(): MetaJSON {
    return {
      title: this.title,
      slug: this.slug,
      date: this.date ? formatISO(this.date) : null,
      categories: this.categories,
      readLengthMin: this.readLengthMin,
      description: this.description,
    };
  }
}
