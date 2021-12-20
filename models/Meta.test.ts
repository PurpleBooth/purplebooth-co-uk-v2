import { formatISO, parseISO } from "date-fns";
import Meta from "./Meta";

describe("Meta", () => {
  it("has a title", async () => {
    const meta = new Meta("title", ["categories"], 10, "description");
    expect(meta.title).toEqual("title");
  });
  it("has a categories", async () => {
    const meta = new Meta("title", ["categories"], 10, "description");
    expect(meta.categories).toEqual(["categories"]);
  });

  it("has a read length", async () => {
    const meta = new Meta("title", ["categories"], 10, "description");
    expect(meta.readLengthMin).toEqual(10);
  });

  it("has a description length", async () => {
    const meta = new Meta("title", ["categories"], 10, "description");
    expect(meta.description).toEqual("description");
  });

  it("has a date", async () => {
    const date = new Date();
    const meta = new Meta("title", ["categories"], 10, "description", date);
    expect(meta.date).toEqual(date);
  });
  it("has a slug", async () => {
    const meta = new Meta("This is a much more realistic title ?!@", ["categories"], 10, "description");
    expect(meta.slug).toEqual("this-is-a-much-more-realistic-title-");
  });
  it("can convert to json serializable object", async () => {
    const date = new Date();
    const meta = new Meta("This is a much more realistic title ?!@", ["categories"], 10, "description", date);
    expect(meta.toJSON()).toEqual({
      "categories": [
        "categories"
      ],
      "date": formatISO(date),
      "description": "description",
      "readLengthMin": 10,
      "slug": "this-is-a-much-more-realistic-title-",
      "title": "This is a much more realistic title ?!@"
    });
  });

  it("can convert to json serializable object", async () => {
    const actual = Meta.fromGrayMatterFile({
      content: "ABC",
      data: { title: "Title", date: "2021-12-19T21:34:32Z", "categories": ["cake"], description: "Description" }
    });
    expect(actual).toEqual({
      "categories": [
        "cake"
      ],
      "date": parseISO("2021-12-19T21:34:32Z"),
      "description": "Description",
      "readLengthMin": 1,
      "title": "Title"
    });
  });

});
