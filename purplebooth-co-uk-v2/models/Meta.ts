import { formatISO, parseISO } from "date-fns";
import { GrayMatterFile } from "gray-matter";

const averageWpm = 255;

export interface MetaJSON {
  title: string;
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

  toJSON(): MetaJSON {
    return {
      title: this.title,
      date: this.date ? formatISO(this.date) : null,
      categories: this.categories,
      readLengthMin: this.readLengthMin,
      description: this.description,
    };
  }

  static fromGrayMatterFile(grayMatterFile: GrayMatterFile<Buffer>) {
    const wordCount = grayMatterFile.content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / averageWpm);

    return new Meta(
      grayMatterFile.data.title,
      grayMatterFile.data.categories || [],
      readingTime,
      grayMatterFile.data.description,
      grayMatterFile.data.date ? parseISO(grayMatterFile.data.date) : undefined
    );
  }
}
