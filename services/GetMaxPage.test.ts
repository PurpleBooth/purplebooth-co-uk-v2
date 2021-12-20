import getMaxPage from "./GetMaxPage";

describe("GetMaxPage", () => {
  it("gets me the max page given 10 per page", async () => {
    expect(getMaxPage(new Array(100))).toEqual(10);
    expect(getMaxPage(new Array(2))).toEqual(1);
    expect(getMaxPage(new Array(12))).toEqual(2);
  });
});
