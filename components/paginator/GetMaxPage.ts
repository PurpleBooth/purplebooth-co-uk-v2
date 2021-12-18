export const getMaxPage = (articleMetas: unknown[]): number =>
  articleMetas.length % 10 == 0
    ? articleMetas.length / 10
    : (articleMetas.length - (articleMetas.length % 10)) / 10 + 1;
