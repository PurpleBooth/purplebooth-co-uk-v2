import { formatISO, parseISO } from "date-fns";

const averageWpm = 255;

export interface MetaJSON {
  title: string;
  categories: string[];
  readLengthMin: number;
  date: string | null;
  description: string;
}

interface MarkdownMatter {
  title: string;
  categories: string[];
  date?: string;
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

  toJSON(): MetaJSON {
    return {
      title: this.title,
      date: this.date ? formatISO(this.date) : null,
      categories: this.categories,
      readLengthMin: this.readLengthMin,
      description: this.description,
    };
  }

  static fromMarkdown(data: MarkdownMatter, content: string) {
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / averageWpm);

    return new Meta(
      data.title,
      data.categories || [],
      readingTime,
      data.description,
      data.date ? parseISO(data.date) : undefined
    );
  }
}
